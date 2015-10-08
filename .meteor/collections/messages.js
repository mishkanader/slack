/**
 * Created by Mishkanader on 10/8/2015.
 */


Messages = new Mongo.Collection("messages");
Messages.insert({greeting: "hello"}, function() {});