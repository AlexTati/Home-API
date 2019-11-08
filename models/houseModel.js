const house = function (data) {
    this.Id = data.Id;
    this.Title = data.Title;
    this.Short_description = data.Short_description;
    this.Long_description = data.Long_description;
    this.Nb_guest = data.Nb_guest;
    this.Picture = data.Picture;
    this.Active = data.Active;
    this.Deletion_time = data.Deletion_time;
    this.Creation_date = new Date();
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

    this.isValid = function () {
        if (this.Title && this.Short_description && this.Nb_guest && this.Insurance_mandatory
            && this.Street && this.Num && this.Box && this.City_id && data.House_type_id)
            return true
        else
            return false
    }
}

module.exports = house;
