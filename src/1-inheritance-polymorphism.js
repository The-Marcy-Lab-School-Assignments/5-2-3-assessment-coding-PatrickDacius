class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }

  addContact(contact) {
    if (!contact.name || !contact.phoneNumber) {
      return 'Invalid';
    }

    if (typeof contact.phoneNumber !== 'string' || contact.phoneNumber.length !== 10) {
      return 'Invalid';
    }

    this.contacts.push(contact);
    return `${contact.name} added.`;
  }

  removeContact(name) {
    const index = this.contacts.findIndex(contact => contact.name === name);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      return `${name} removed.`;
    } else {
      return `Contact not found.`;
    }
  }
  makeCall(input) {

    if (typeof input === 'string' && input.length === 10) {

      const contact = this.contacts.find(c => c.phoneNumber === input);
      if (contact) {
        return `Calling ${contact.name}...`;
      } else {
        return `Calling ${input}...`;
      }
    } else {

      const contact = this.contacts.find(c => c.name === input);
      if (contact) {
        return `Calling ${contact.name}...`;
      } else {
        return 'Invalid';
      }
    }
  }
}




class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model;
  }

  sendIMessage(receiver, message) {
    if (receiver instanceof AppleIPhone) {
      return `Message: ${message} - sent from ${this.model}`;
    } else {
      return `Message could not be sent.`;
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
