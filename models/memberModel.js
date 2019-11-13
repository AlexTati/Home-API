

const member = function(data)
{

    this.Id = data.Id;
    this.Lastname = data.Lastname;
    this.Firstname = data.Firstname;
    this.Email = data.Email;
    this.Phone = data.Phone;
    this.Password = data.Password;
    this.Home_street = data.Home_street;
    this.Home_num = data.Home_num;
    this.Home_box = data.Home_box;
    this.Home_city_id = data.Home_city_id;
    this.Facturation_street = data.Facturation_street;
    this.Facturation_num = data.Facturation_num;
    this.Facturation_box = data.Facturation_box;
    this.Facturation_city_id = data.Facturation_city_id;
    this.Home_City_Name = data.Home_City_Name;
    this.Home_City_Zip 	= data.Home_City_Zip;
    this.Home_Country_id = data.Home_Country_id;
    this.Home_Country_Name = data.Home_Country_Name;
    this.Account_type = data.Account_type;

    this.isValid = function(){
        if (this.Lastname !== undefined && this.Firstname !== undefined && this.Email !== undefined
            && this.Phone !== undefined && this.Password !== undefined && this.Home_street !== undefined
            && this.Home_num !== undefined && this.Home_box !== undefined && this.Home_city_id !== undefined)
            return true
        else
            return false
    }

};

module.exports = member;
