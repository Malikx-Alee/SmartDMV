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
 * @param {org.smart.dmv.RegisterVehicleTransaction} tx The sample transaction instance.
 * @transaction
 */
async function RegisterVehicleTransaction(tx) {  // eslint-disable-line no-unused-vars

    
    tx.reg.check = tx.check;


  // Get the asset registry for the asset.
  const assetRegistry = await getAssetRegistry('org.smart.dmv.VehicleRegistration');
  // Update the asset in the asset registry.
  await assetRegistry.update(tx.reg);

  
}
