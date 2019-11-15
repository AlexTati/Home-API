const Booking = function (data) {

    this.Id = data.Id;
    this.Accepter = data.Accepter;
    this.DateDemande = data.DateDemande;
    this.DatePayement = data.DatePayement;
    this.DateAcceptation = data.DateAcceptation;
    this.DateDebut = data.DateDebut;
    this.DateFin = data.DateFin;
    this.Insurance = data.Insurance;
    this.Membre_id = data.Membre_id;
    this.House_id = data.House_id;

    this.isValid = function (){
        return true;
    }

}

module.exports = Booking;
