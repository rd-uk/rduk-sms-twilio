/**
 * Copyright (c) 2017 RDUK <tech@rduk.fr>, All rights reserved.
 * 
 * The above copyright notice shall be included in all copies or substantial
 * portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

var util = require('util');
var base = require('@rduk/sms/lib/provider/base');
var twilio = require('twilio');

var TwilioProvider = function TwilioProvider(config) {
    TwilioProvider.super_.call(this, config);

    this.client = new twilio(this.connection.accountSid, this.connection.authToken);
};

util.inherits(TwilioProvider, base);

TwilioProvider.prototype.send = function(to, body) {
    return this.client.messages.create({
        body: body,
        to: to,
        from: this.connection.from
    });
};

module.exports = TwilioProvider;
