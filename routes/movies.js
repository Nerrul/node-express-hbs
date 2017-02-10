'use strict';

var express = require('express');
var router = express.Router();

var Movie_MR = require('./../app/models/movie');

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.findOne`
 * method. In this case we will use single field as filter.
 */
router.get('/find-one/filter-with-one-field', function (req, res, next) {
  Movie_MR.findOneWithOneField(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * single field for filtering
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-one-field/limit/to-array', function (req, res, next) {
  Movie_MR.findWithOneField(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use projection to reduce documents size by limiting fields in result
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-one-field/projection-include-fields/limit/to-array', function (req, res, next) {
  Movie_MR.findWithOneFieldProjectionIncludeFields(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use projection to reduce documents size by limiting fields in result
 * Will use projection to exclude desired fields from resultant documents
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-one-field/projection-exclude-fields/limit/to-array', function (req, res, next) {
  Movie_MR.findWithOneFieldProjectionExcludeFields(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use projection to reduce documents size by limiting fields in result
 * Will use projection to eleminate `_id` field
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-one-field/projection-include-fields-exclude-id/limit/to-array', function (req, res, next) {
  Movie_MR.findWithOneFieldProjectionIncludedFieldExcludeId(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use $lt, $gt comparision operator
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/lt-gt-comparision-operator/limit/to-array', function (req, res, next) {
  Movie_MR.findLtGtComparisionOperator(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use $lte, $gte comparision operator
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/lte-gte-comparision-operator/limit/to-array', function (req, res, next) {
  Movie_MR.findLteGteComparisionOperator(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use $ne comparision operator
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/ne-comparision-operator/limit/to-array', function (req, res, next) {
  Movie_MR.findNeComparisionOperator(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use $in, $nin comparision operator
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-one-field/in-nin-comparision-operator/limit/to-array', function (req, res, next) {
  Movie_MR.findWithOneFieldInNinComparisionOperator(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use $or, $and logical operator
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-one-field/or-and-logical-operator/limit/to-array', function (req, res, next) {
  Movie_MR.findWithOneFieldOrAndLogicalOperator(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use $exists element operator with `true` value
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/exists-true-element-operator/limit/to-array', function (req, res, next) {
  Movie_MR.findExistsTrueElementOperator(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use $exists element operator with `true` value
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/exists-false-element-operator/limit/to-array', function (req, res, next) {
  Movie_MR.findExistsFalseElementOperator(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Will use $type element operator with `true` value
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/type-element-operator/limit/to-array', function (req, res, next) {
  Movie_MR.findTypeElementOperator(req, res, next);
});


/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * multiple fields for filtering
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-multiple-fields/limit/to-array', function (req, res, next) {
  Movie_MR.findWithMultipleFields(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * single field for filtering (Nested Object field will use as filter)
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-nested-object-field/limit/to-array', function (req, res, next) {
  Movie_MR.findWithNestedObjectField(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * An entire array for filtering documents
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-entire-array-elements/limit/to-array', function (req, res, next) {
  Movie_MR.findWithEntireArrayElements(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Any array key to match against provided value
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-any-element-of-array/limit/to-array', function (req, res, next) {
  Movie_MR.findWithAnyElementOfArray(req, res, next);
});

/**
 * This route definition handles request for demonstrating retrieving documents using `collection.find`
 * method. In this case we will use :
 * 
 * Specific key of array to match against provided value
 * limit method of find cursor
 * toArray method of find curosr
 */
router.get('/find/filter-with-specific-element-of-array/limit/to-array', function (req, res, next) {
  Movie_MR.findWithSpecificElementOfArray(req, res, next);
});



module.exports = router;

