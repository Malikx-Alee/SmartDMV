/**
 * New script file for Change of Engine Number
 */

/**
 * Sample transaction processor function.
 * @param {org.smart.dmv.ChangeEngineNumberTransaction} tx The sample transaction instance.
 * @transaction
 */
async function ChangeEngineNumber(tx) {  // eslint-disable-line no-unused-vars

    // Save the old value of the asset.
    const oldEngineNumber = tx.asset.engineNumber;

    // Update the asset with the new value.
    tx.asset.engineNumber = tx.newEngineNumber;
  	//tx.exciseOfficer.accountID = tx.accountID;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.smart.dmv.Vehicle');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    //let event = getFactory().newEvent('org.smart.dmv', 'ChangeEngineNumberTransactionEvent');
    //event.asset = tx.asset;
    //event.oldEngineNumber = oldEngineNumber;
    //event.newEngineNumber = tx.asset.engineNumber;
  	//event.exciseOfficer = tx.exciseOfficer;
    //emit(event);
}
