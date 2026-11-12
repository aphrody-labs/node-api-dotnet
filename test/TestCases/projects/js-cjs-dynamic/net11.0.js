// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const assert = require('assert');
const dotnet = require('node-api-dotnet/net11.0');

require('./bin/System.Runtime');
require('./bin/System.Console');

dotnet.System.Console.WriteLine(`Hello from .NET ${dotnet.runtimeVersion}!`);
assert.strictEqual(dotnet.frameworkMoniker, 'net11.0');
