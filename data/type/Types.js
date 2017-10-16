import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLBoolean, GraphQLInt, GraphQLFloat, GraphQLScalarType, GraphQLError, Kind } from 'graphql';
import { connectionArgs, connectionFromPromisedArray, globalIdField, nodeDefinitions, fromGlobalId, connectionDefinitions} from 'graphql-relay';
import { DB, Adult }from '../database';
import { Viewer, getViewer } from '../store/UserStore';
import moment from 'moment';


export const {nodeInterface, nodeField} = nodeDefinitions(
    (globalId) => {

        let {type, id} = fromGlobalId(globalId);

        console.log("globalId of " + type + " : " + globalId)
        console.log("id of " + type + " : " + id)

        if (type === 'Adult') { return DB.models.adult.findOne({where: {id: id}}); }

        if (type === 'Viewer') { return getViewer(id)}
        else { return null; }
    },
    (obj) => {

        console.log("in interface obj: " + JSON.stringify(obj))

        
        if (obj instanceof Adult.Instance) { return adltType; }
        else if (obj.id.startsWith('me')) { return viewerType; }
        else {
            return null;
        }
    }
);

export const adultType = new GraphQLObjectType({
    name: 'Adult',
    fields: () => {
        return {
            id: globalIdField('Adult'),
            firstName : { type: GraphQLString, resolve(adult) { return adult.firstname } },
            lastName : { type: GraphQLString, resolve(adult) { return adult.lastname } },
            fatherFirstName : { type: GraphQLString, resolve(adult) { return adult.fatherfirstname } },
            motherFirstName : { type: GraphQLString, resolve(adult) { return adult.motherfirstname } },
            motherLastName : { type: GraphQLString, resolve(adult) { return adult.motherlastname } },
            birthDate : { type: GraphQLMoment, resolve(adult) { return GraphQLMoment.serialize(adult.birthdate) } },
            ninaNumber : { type: GraphQLString, resolve(adult) { return adult.ninanumber } },
            receiptNumber : { type: GraphQLString, resolve(adult) { return adult.receiptnumber } },
        }
    },
    interfaces: () => [nodeInterface]
});


export const GraphQLMoment = new GraphQLScalarType({
    name: 'Date',
    serialize: function (value) {
        let date = moment(value);
        if(!date.isValid()) {
            throw new GraphQLError('Field serialize error: value is an invalid Date');
        }
        return date.format();
    },
    parseValue: function (value) {
        let date = moment(value);
        if(!date.isValid()) {
            throw new GraphQLError('Field parse error: value is an invalid Date');
        }
        return date;
    },

    parseLiteral: (ast) => {
        if(ast.kind !== Kind.STRING) {
            throw new GraphQLError('Query error: Can only parse strings to date but got: ' + ast.kind);
        }
        let date = moment(ast.value);
        if(!date.isValid()) {
            throw new GraphQLError('Query error: Invalid date');
        }
        return date;
    }
});

export const viewerType = new GraphQLObjectType({
    name: 'Viewer',
    description: 'Application viewer',
    fields: () => {
        return {
            id: globalIdField('Viewer'),
            adult: {
                type: adultType,
                description: "List of available locations",
                args: {
                    ...connectionArgs,
                    search: {
                        name: 'search',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (_, args) => {
                    var term = args.search? args.search : '';
                    return connectionFromPromisedArray(DB.models.adult.findOne({where: {ninanumber: {$eq: term} }}), args)
                }
            }
        }
    },
    interfaces: [nodeInterface]
});

