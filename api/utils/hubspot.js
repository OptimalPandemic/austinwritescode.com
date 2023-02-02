const hubspot = require("@hubspot/api-client");

const logger = require("./logger");

const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_API_TOKEN });

/**
 * Adds a new customer contact to the HubSpot CRM.
 */
const createContact = async (email) => {
    try {
        const create = await hubspotClient.crm.contacts.basicApi.create({
            properties: {
                email: email
            }
        });

        logger.info(`Added ${email} to contact list in HubSpot.`);
    }
    catch (e) {
        if(e.code != 409) {
            logger.error(`Failed to add ${email} to HubSpot: ${e}`);
            throw Error(e);
        }
    }
};

module.exports = {
    createContact
};