'use strict';

var qOne = prompt('yes or no');
var sanitizedAnswer = qOne .toUpperCase().trim();

if (sanitizedAnswer === 'Y'
|| sanitizedAnswer === 'YES') {
    alert(qOne+ '. Yes Sir');
}