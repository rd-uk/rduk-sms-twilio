/**
 * MIT License
 *
 * Copyright (c) 2017 RDUK <tech@rduk.fr>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
var errors = require('rduk-errors');
var base = require('@rduk/sms/lib/provider/base');
var twilio = require('twilio');

var TwilioProvider = function TwilioProvider(config) {
    TwilioProvider.super_.call(this, config);

    this.client = new twilio(this.connection.accountSid, this.connection.authToken);
};

util.inherits(TwilioProvider, base);

TwilioProvider.prototype.send = function(to, body) {
    console.log('sms send', to, body);
    return this.client.messages.create({
        body: body,
        to: to,
        from: this.connection.from
    });
};

module.exports = TwilioProvider;
