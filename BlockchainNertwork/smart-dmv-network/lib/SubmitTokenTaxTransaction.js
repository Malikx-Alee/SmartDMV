/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {org.smart.dmv.SubmitTokenTaxTransaction} tx The sample transaction instance.
 * @transaction
 */
async function SubmitTokenTax(tx) {  // eslint-disable-line no-unused-vars

    // Save the old value of the asset.
    //const depositSlipNo = tx.depositSlipNo;

    //const result = await request.get({ uri: 'http://192.168.1.2:10000/api/banks/'+depositSlipNo , json: true });
    //const slip = result.slipnumber;


    // Update the asset with the new value.
    //tx.asset.tokenTaxSubmited = "Submited";
    //if(slip == depositSlipNo)
    //{
        // Update the asset with the new value.
        tx.asset.tokenTaxSubmited = "SUBMITTED";
        
        // Get the asset registry for the asset.
        const assetRegistry = await getAssetRegistry('org.smart.dmv.Vehicle');
        // Update the asset in the asset registry.
        await assetRegistry.update(tx.asset);
    //}

    // Emit an event for the modified asset.
    //let event = getFactory().newEvent('org.smart.dmv', 'SubmitTokenTaxTransactionEvent');
    //event.asset = tx.asset;
    //event.owner = tx.owner;
    //event.depositSlipNo = depositSlipNo;
    //event.submitted = "Submitted";
    //emit(event);
}
