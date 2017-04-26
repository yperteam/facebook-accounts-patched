// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by facebook-accounts-patched.js.
import { name as packageName } from "meteor/facebook-accounts-patched";

// Write your tests here!
// Here is an example.
Tinytest.add('facebook-accounts-patched - example', function (test) {
  test.equal(packageName, "facebook-accounts-patched");
});
