
const availibility = function(data)
{
    this.Id = data.Id;
    this.House_id = data.House_id;
    this.Start_date = data.Start_date;
    this.End_date = data.End_date;

    this.isValid = function () {
        return true;
    }
}

module.exports = availibility;
