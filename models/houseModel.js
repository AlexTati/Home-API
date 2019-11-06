const house = function(data)
{
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

    this.isValid = function(){
        return true;
    }
}

module.exports = house;