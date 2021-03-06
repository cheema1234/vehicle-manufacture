/*
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { CHAINCODE_NAME, CHANNEL_NAME, Config, DEFAULT_LOCAL_CONNECTION_PATH, DEFAULT_LOCAL_WALLET_PATH } from 'common';
import { setup } from './app';

async function createServer() {
    const port = (await Config.readConfig()).regulator.port;

    const app = await setup({
        channelName: CHANNEL_NAME,
        connectionProfilePath: DEFAULT_LOCAL_CONNECTION_PATH,
        contractName: CHAINCODE_NAME,
        org: 'VDA',
        walletPath: DEFAULT_LOCAL_WALLET_PATH,
    });

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}

createServer();
