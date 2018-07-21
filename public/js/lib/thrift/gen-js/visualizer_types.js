//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
import Thrift from "../thrift.js";

const Location = function(args) {
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
      if (ftype == Thrift.Type.I64) {
        this.x = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.y = input.readI64().value;
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
    output.writeFieldBegin('x', Thrift.Type.I64, 1);
    output.writeI64(this.x);
    output.writeFieldEnd();
  }
  if (this.y !== null && this.y !== undefined) {
    output.writeFieldBegin('y', Thrift.Type.I64, 2);
    output.writeI64(this.y);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

const Iteration = function(args) {
  this.clearPrevious = null;
  this.newEnvelopeNodesCells = null;
  this.projectedPath = null;
  if (args) {
    if (args.clearPrevious !== undefined && args.clearPrevious !== null) {
      this.clearPrevious = args.clearPrevious;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field clearPrevious is unset!');
    }
    if (args.newEnvelopeNodesCells !== undefined && args.newEnvelopeNodesCells !== null) {
      this.newEnvelopeNodesCells = Thrift.copyList(args.newEnvelopeNodesCells, [Location]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field newEnvelopeNodesCells is unset!');
    }
    if (args.projectedPath !== undefined && args.projectedPath !== null) {
      this.projectedPath = Thrift.copyList(args.projectedPath, [Location]);
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
        this.clearPrevious = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
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
          elem6 = new Location();
          elem6.read(input);
          this.newEnvelopeNodesCells.push(elem6);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
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
          elem13 = new Location();
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
  if (this.newEnvelopeNodesCells !== null && this.newEnvelopeNodesCells !== undefined) {
    output.writeFieldBegin('newEnvelopeNodesCells', Thrift.Type.SET, 2);
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
    output.writeFieldBegin('projectedPath', Thrift.Type.SET, 3);
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

const IterationBundle = function(args) {
  this.iterations = null;
  this.bufferIsFlushed = null;
  if (args) {
    if (args.iterations !== undefined && args.iterations !== null) {
      this.iterations = Thrift.copyList(args.iterations, [Iteration]);
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
          elem22 = new Iteration();
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
        this.bufferIsFlushed = input.readBool().value;
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

const Init = function(args) {
  this.width = null;
  this.height = null;
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
    if (args.blockedCells !== undefined && args.blockedCells !== null) {
      this.blockedCells = Thrift.copyList(args.blockedCells, [Location]);
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
      if (ftype == Thrift.Type.I64) {
        this.width = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.height = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.SET) {
        var _size24 = 0;
        var _rtmp328;
        this.blockedCells = [];
        var _etype27 = 0;
        _rtmp328 = input.readSetBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = new Location();
          elem30.read(input);
          this.blockedCells.push(elem30);
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
    output.writeFieldBegin('width', Thrift.Type.I64, 1);
    output.writeI64(this.width);
    output.writeFieldEnd();
  }
  if (this.height !== null && this.height !== undefined) {
    output.writeFieldBegin('height', Thrift.Type.I64, 2);
    output.writeI64(this.height);
    output.writeFieldEnd();
  }
  if (this.blockedCells !== null && this.blockedCells !== undefined) {
    output.writeFieldBegin('blockedCells', Thrift.Type.SET, 3);
    output.writeSetBegin(Thrift.Type.STRUCT, this.blockedCells.length);
    for (var iter31 in this.blockedCells)
    {
      if (this.blockedCells.hasOwnProperty(iter31))
      {
        iter31 = this.blockedCells[iter31];
        iter31.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

const NoDataException = function(args) {
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

export {Iteration, IterationBundle, Init, Location, NoDataException};