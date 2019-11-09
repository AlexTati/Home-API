const option = require("../models/optionModel");
const comment = require("../models/commentModel");
const membre = require("../models/memberModel");

const house = function (data) {
    this.Id = data.Id;
    this.Title = data.Title;
    this.Short_description = data.Short_description;
    this.Long_description = data.Long_description;
    this.Nb_guest = data.Nb_guest;
    this.Picture = data.Picture;
    this.Active = data.Active;
    this.Deletion_time = data.Deletion_time;
    this.Creation_date = data.Creation_date;
    this.Insurance_mandatory = data.Insurance_mandatory;
    this.Street = data.Street;
    this.Num = data.Num;
    this.Box = data.Box;
    this.City_id = data.City_id;
    this.Membre_id = data.Membre_id;
    this.House_type_id = data.House_type_id;

    this.City_Name = data.City_Name;
    this.City_Zip = data.City_Zip;
    this.Country_id = data.Country_id;
    this.Country_Name = data.Country_Name;
    this.House_type_name = data.House_type_name
    this.Note = data.Note;

    if (data.optsJSON){
        this.options = [];
        JSON.parse(data.optsJSON).forEach(item => this.options.push(new option(item)));
    }

    if(data.cmtsJSON){
        this.commments = [];
        JSON.parse(data.cmtsJSON).forEach(item => this.commments.push(new comment(item)));
    }

    if(data.ownerJSON){
        this.owner = new membre(JSON.parse(data.ownerJSON))
    }


    this.isValid = function () {
        if (this.Title && this.Short_description && this.Nb_guest && this.Insurance_mandatory
            && this.Street && this.Num && this.Box && this.City_id && data.House_type_id)
            return true
        else
            return false
    }
}

module.exports = house;
