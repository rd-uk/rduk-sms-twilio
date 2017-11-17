'use strict';

describe('Twilio SMS Provider:', function() {

    var errors = require('rduk-errors');
    var TwilioProvider = require('../lib');

    describe('instance creation', function() {

        describe('without config', function() {
            it('should throw an ArgumentError', function() {
                expect(function() {
                    new TwilioProvider();
                }).toThrowError(errors.ArgumentError);
            });
        });

    });

});
