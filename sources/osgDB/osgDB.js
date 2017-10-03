'use strict';
var utils = require('osg/utils');
var Input = require('osgDB/Input');
var ReaderParser = require('osgDB/readerParser');
var DatabasePager = require('osgDB/DatabasePager');
var osgWrappers = require('osgWrappers/serializers/osg');
var osgAnimationWrappers = require('osgWrappers/serializers/osgAnimation');
var osgTextWrappers = require('osgWrappers/serializers/osgText');
var Registry = require('osgDB/Registry');
var FileHelper = require('osgDB/FileHelper');

var osgDB = {};
osgDB.Input = Input;
utils.objectMix(osgDB, ReaderParser);
osgDB.DatabasePager = DatabasePager;
osgDB.ObjectWrapper.serializers.osg = osgWrappers;
osgDB.ObjectWrapper.serializers.osgAnimation = osgAnimationWrappers;
osgDB.ObjectWrapper.serializers.osgText = osgTextWrappers;
osgDB.Registry = Registry;
osgDB.FileHelper = FileHelper;
osgDB.requestFile = require('osgDB/requestFile');

var zlib = require('osgDB/zlib');
utils.objectMix(osgDB, zlib);

module.exports = osgDB;
