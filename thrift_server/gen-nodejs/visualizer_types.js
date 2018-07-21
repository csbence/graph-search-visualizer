//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var Location = module.exports.Location = function(args) {
  this.x = null;
  this.y = null;
  if (args) {
    if (args.x !== undefined && args.x !== null) {
      this.x = args.x;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field x is unset!');
    }
    if (args.y !== undefined && args.y !== null) {
      this.y = args.y;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field y is unset!');
    }
  }
};
Location.prototype = {};
Location.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.x = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.y = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Location.prototype.write = function(output) {
  output.writeStructBegin('Location');
  if (this.x !== null && this.x !== undefined) {
    output.writeFieldBegin('x', Thrift.Type.I32, 1);
    output.writeI32(this.x);
    output.writeFieldEnd();
  }
  if (this.y !== null && this.y !== undefined) {
    output.writeFieldBegin('y', Thrift.Type.I32, 2);
    output.writeI32(this.y);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Iteration = module.exports.Iteration = function(args) {
  this.clearPrevious = null;
  this.agentLocation = null;
  this.newEnvelopeNodesCells = null;
  this.projectedPath = null;
  if (args) {
    if (args.clearPrevious !== undefined && args.clearPrevious !== null) {
      this.clearPrevious = args.clearPrevious;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field clearPrevious is unset!');
    }
    if (args.agentLocation !== undefined && args.agentLocation !== null) {
      this.agentLocation = new ttypes.Location(args.agentLocation);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field agentLocation is unset!');
    }
    if (args.newEnvelopeNodesCells !== undefined && args.newEnvelopeNodesCells !== null) {
      this.newEnvelopeNodesCells = Thrift.copyList(args.newEnvelopeNodesCells, [ttypes.Location]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field newEnvelopeNodesCells is unset!');
    }
    if (args.projectedPath !== undefined && args.projectedPath !== null) {
      this.projectedPath = Thrift.copyList(args.projectedPath, [ttypes.Location]);
    }
  }
};
Iteration.prototype = {};
Iteration.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.clearPrevious = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.agentLocation = new ttypes.Location();
        this.agentLocation.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.SET) {
        var _size0 = 0;
        var _rtmp34;
        this.newEnvelopeNodesCells = [];
        var _etype3 = 0;
        _rtmp34 = input.readSetBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Location();
          elem6.read(input);
          this.newEnvelopeNodesCells.push(elem6);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.SET) {
        var _size7 = 0;
        var _rtmp311;
        this.projectedPath = [];
        var _etype10 = 0;
        _rtmp311 = input.readSetBegin();
        _etype10 = _rtmp311.etype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          var elem13 = null;
          elem13 = new ttypes.Location();
          elem13.read(input);
          this.projectedPath.push(elem13);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Iteration.prototype.write = function(output) {
  output.writeStructBegin('Iteration');
  if (this.clearPrevious !== null && this.clearPrevious !== undefined) {
    output.writeFieldBegin('clearPrevious', Thrift.Type.BOOL, 1);
    output.writeBool(this.clearPrevious);
    output.writeFieldEnd();
  }
  if (this.agentLocation !== null && this.agentLocation !== undefined) {
    output.writeFieldBegin('agentLocation', Thrift.Type.STRUCT, 2);
    this.agentLocation.write(output);
    output.writeFieldEnd();
  }
  if (this.newEnvelopeNodesCells !== null && this.newEnvelopeNodesCells !== undefined) {
    output.writeFieldBegin('newEnvelopeNodesCells', Thrift.Type.SET, 3);
    output.writeSetBegin(Thrift.Type.STRUCT, this.newEnvelopeNodesCells.length);
    for (var iter14 in this.newEnvelopeNodesCells)
    {
      if (this.newEnvelopeNodesCells.hasOwnProperty(iter14))
      {
        iter14 = this.newEnvelopeNodesCells[iter14];
        iter14.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.projectedPath !== null && this.projectedPath !== undefined) {
    output.writeFieldBegin('projectedPath', Thrift.Type.SET, 4);
    output.writeSetBegin(Thrift.Type.STRUCT, this.projectedPath.length);
    for (var iter15 in this.projectedPath)
    {
      if (this.projectedPath.hasOwnProperty(iter15))
      {
        iter15 = this.projectedPath[iter15];
        iter15.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IterationBundle = module.exports.IterationBundle = function(args) {
  this.iterations = null;
  this.bufferIsFlushed = null;
  if (args) {
    if (args.iterations !== undefined && args.iterations !== null) {
      this.iterations = Thrift.copyList(args.iterations, [ttypes.Iteration]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field iterations is unset!');
    }
    if (args.bufferIsFlushed !== undefined && args.bufferIsFlushed !== null) {
      this.bufferIsFlushed = args.bufferIsFlushed;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bufferIsFlushed is unset!');
    }
  }
};
IterationBundle.prototype = {};
IterationBundle.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.iterations = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ttypes.Iteration();
          elem22.read(input);
          this.iterations.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.bufferIsFlushed = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IterationBundle.prototype.write = function(output) {
  output.writeStructBegin('IterationBundle');
  if (this.iterations !== null && this.iterations !== undefined) {
    output.writeFieldBegin('iterations', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.iterations.length);
    for (var iter23 in this.iterations)
    {
      if (this.iterations.hasOwnProperty(iter23))
      {
        iter23 = this.iterations[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.bufferIsFlushed !== null && this.bufferIsFlushed !== undefined) {
    output.writeFieldBegin('bufferIsFlushed', Thrift.Type.BOOL, 2);
    output.writeBool(this.bufferIsFlushed);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Init = module.exports.Init = function(args) {
  this.width = null;
  this.height = null;
  this.start = null;
  this.goals = null;
  this.blockedCells = null;
  if (args) {
    if (args.width !== undefined && args.width !== null) {
      this.width = args.width;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field width is unset!');
    }
    if (args.height !== undefined && args.height !== null) {
      this.height = args.height;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field height is unset!');
    }
    if (args.start !== undefined && args.start !== null) {
      this.start = new ttypes.Location(args.start);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field start is unset!');
    }
    if (args.goals !== undefined && args.goals !== null) {
      this.goals = Thrift.copyList(args.goals, [ttypes.Location]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field goals is unset!');
    }
    if (args.blockedCells !== undefined && args.blockedCells !== null) {
      this.blockedCells = Thrift.copyList(args.blockedCells, [ttypes.Location]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field blockedCells is unset!');
    }
  }
};
Init.prototype = {};
Init.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.width = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.height = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.start = new ttypes.Location();
        this.start.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size24 = 0;
        var _rtmp328;
        this.goals = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = new ttypes.Location();
          elem30.read(input);
          this.goals.push(elem30);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.SET) {
        var _size31 = 0;
        var _rtmp335;
        this.blockedCells = [];
        var _etype34 = 0;
        _rtmp335 = input.readSetBegin();
        _etype34 = _rtmp335.etype;
        _size31 = _rtmp335.size;
        for (var _i36 = 0; _i36 < _size31; ++_i36)
        {
          var elem37 = null;
          elem37 = new ttypes.Location();
          elem37.read(input);
          this.blockedCells.push(elem37);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Init.prototype.write = function(output) {
  output.writeStructBegin('Init');
  if (this.width !== null && this.width !== undefined) {
    output.writeFieldBegin('width', Thrift.Type.I32, 1);
    output.writeI32(this.width);
    output.writeFieldEnd();
  }
  if (this.height !== null && this.height !== undefined) {
    output.writeFieldBegin('height', Thrift.Type.I32, 2);
    output.writeI32(this.height);
    output.writeFieldEnd();
  }
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.STRUCT, 3);
    this.start.write(output);
    output.writeFieldEnd();
  }
  if (this.goals !== null && this.goals !== undefined) {
    output.writeFieldBegin('goals', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.goals.length);
    for (var iter38 in this.goals)
    {
      if (this.goals.hasOwnProperty(iter38))
      {
        iter38 = this.goals[iter38];
        iter38.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.blockedCells !== null && this.blockedCells !== undefined) {
    output.writeFieldBegin('blockedCells', Thrift.Type.SET, 5);
    output.writeSetBegin(Thrift.Type.STRUCT, this.blockedCells.length);
    for (var iter39 in this.blockedCells)
    {
      if (this.blockedCells.hasOwnProperty(iter39))
      {
        iter39 = this.blockedCells[iter39];
        iter39.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NoDataException = module.exports.NoDataException = function(args) {
  Thrift.TException.call(this, "NoDataException");
  this.name = "NoDataException";
};
Thrift.inherits(NoDataException, Thrift.TException);
NoDataException.prototype.name = 'NoDataException';
NoDataException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NoDataException.prototype.write = function(output) {
  output.writeStructBegin('NoDataException');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

