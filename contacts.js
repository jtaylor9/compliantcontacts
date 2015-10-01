/**
 * Contact functions
 * Created by jtayl_000 on 10/1/2015.
 */

/*global _*/
/*exported ContactList, Contact*/

/**
 * This constructor constructs a Contact with the following fields
 * @param firstName ; first name of contact
 * @param lastName ; first name of contact
 * @param address ; address of contact
 * @param zipcode ; zipcode of contact
 * @param telNum ; telNum of Contact
 * @constructor ; creats a Contact with the above fields
 */
var Contact = function (firstName, lastName, address, zipcode, telNum) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.telNum = telNum;
  var callNum = 0;

  /**
   * This function updates an internal counter and returns true indicating that the call was successful.
   * @returns ; returns a boolean true that the function has been called
   */
  this.call = function () {
    callNum++;
    return true;
  };

  /**
   * This function returns an integer indicating the number of times that contact has been called
   * @returns ; returns an integer indicating how many times Contact() has been called
   */
  this.numCalls = function () {
    return callNum;
  };
};

/**
 * Accepts no arguments, but defines the a list of functions
 * @constructor ; constructs object for contact to be able to use the functions
 */
var ContactList = function () {

  var contactList = [];

  /**
   * Accepts a Contact instance and adds it to an internal data structure
   * @param contact ; the incoming contact to add
   * @returns ; return true that it was successfull
   */
  this.addContact = function (contact) {
    contactList.push(contact);
    return true;
  };

  /**
   * returns the number of contacts in this ContactList()
   * @returns ;
   */
  this.numContacts = function () {
    return contactList.length;
  };

  /**
   * s passed a String and returns all of the Contacts with that lastName.
   * @param last
   * @returns {Array}
   */
  this.findContact = function (last) {
    var lastNameList = [];
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].lastName === last) {
        lastNameList.push(contactList[i]);
      }
    }
    return lastNameList;
  };

  /**
   * is passed a firstName and lastName and deletes all matching Contacts
   * @param first
   * @param last
   */
  this.deleteContact = function (first, last) {
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].firstName === first && contactList[i].lastName === last) {
        contactList.splice(i, 1);
      }
    }
  };

  /**
   * returns a string containing the contacts sorted by lastName
   * @returns {Array}
   */
  this.listContacts = function () {
    return _.sortBy(contactList, "lastName");
  };
};