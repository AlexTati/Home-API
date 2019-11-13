const option = require("../models/optionModel");
const comment = require("../models/commentModel");
const membre = require("../models/memberModel");
const availability = require("../models/availibilityModel");

const house = function (data) {

    this.Id = (data.Id === undefined) ? null : data.Id;
    this.Title = (data.Title === undefined) ? null : data.Title;
    this.Short_description = (data.Short_description === undefined) ? null : data.Short_description;
    this.Long_description = (data.Long_description === undefined) ? null : data.Long_description;
    this.Nb_guest = (data.Nb_guest === undefined) ? null : data.Nb_guest;
    this.Picture = (data.Picture === undefined) ? null : data.Picture;
    this.Active = (data.Active === undefined) ? null : data.Active;
    this.Deletion_time = (data.Deletion_time === undefined) ? null : data.Deletion_time;
    this.Creation_date = (data.Creation_date === undefined) ? null : data.Creation_date;
    this.Insurance_mandatory = (data.Insurance_mandatory === undefined) ? null : data.Insurance_mandatory;
    this.Street = (data.Street === undefined) ? null : data.Street;
    this.Num = (data.Num === undefined) ? null : data.Num;
    this.Box = (data.Box === undefined) ? null : data.Box;
    this.City_id = (data.City_id === undefined) ? null : data.City_id;
    this.Membre_id = (data.Membre_id === undefined) ? null : data.Membre_id;
    this.House_type_id = (data.House_type_id === undefined) ? null : data.House_type_id;

    this.City_Name = data.City_Name;
    this.City_Zip = data.City_Zip;
    this.Country_id = data.Country_id;
    this.Country_Name = data.Country_Name;
    this.House_type_name = data.House_type_name;
    this.Note = data.Note;

    this.Lat = data.Lat;
    this.Lng = data.Lng;

    this.options = [];
    this.comments = [];
    this.availabilities = [];

    if (typeof data.options == "string") {
        JSON.parse(data.options).forEach(item => this.options.push(new option(item)));
    } else if (data.options !== null && typeof data.options == "object") {
        data.options.forEach(item => this.options.push(new option(item)));
    }

    if (typeof data.availabilities == "string") {
        JSON.parse(data.availabilities).forEach(item => this.availabilities.push(new availability(item)))
    } else if (data.availabilities !== null && typeof data.availabilities == "object") {
        data.availabilities = new availability(item);
    }


    if (typeof data.comments == "string") {
        JSON.parse(data.comments).forEach(item => this.comments.push(new comment(item)));
    }

    if (typeof data.owner == "string") {
        this.owner = new membre(JSON.parse(data.owner))
    }


    this.isValid = function () {
        if (this.Title !== undefined && this.Short_description !== undefined && this.Nb_guest !== undefined && this.Insurance_mandatory !== undefined
            && this.Street !== undefined && this.Num !== undefined && this.Box !== undefined && this.City_id !== undefined && data.House_type_id !== undefined)
            return true
        else
            return false
    }
}

module.exports = house;
