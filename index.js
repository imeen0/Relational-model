/*Hôtel

Table : Hotel
Attributs :
HotelID (PK)
Nom
Adresse
Téléphone
Chambre

Table : Chambre
Attributs :
ChambreID (PK)
Type
Prix
HotelID (FK)
Client

Table : Client
Attributs :
ClientID (PK)
Nom
Prénom
Adresse
Réservation

Table : Reservation
Attributs :
ReservationID (PK)
DateDebut
DateFin
ClientID (FK)
ChambreID (FK)
Relations principales :
Hôtel ↔ Chambre

Relation : Un hôtel possède plusieurs chambres.
Représentation : HotelID est une clé étrangère dans la table Chambre.
Chambre ↔ Réservation

Relation : Une chambre peut être réservée plusieurs fois, et une réservation concerne une seule chambre.
Représentation : ChambreID est une clé étrangère dans la table Reservation.
Client ↔ Réservation

Relation : Un client peut faire plusieurs réservations.
Représentation : ClientID est une clé étrangère dans la table Reservation.
Diagramme Relationnel (Final)
Hotel(HotelID (PK), Nom, Adresse, Téléphone)
Chambre(ChambreID (PK), Type, Prix, HotelID (FK))
Client(ClientID (PK), Nom, Prénom, Adresse)
Reservation(ReservationID (PK), DateDebut, DateFin, ClientID (FK), ChambreID (FK))*/