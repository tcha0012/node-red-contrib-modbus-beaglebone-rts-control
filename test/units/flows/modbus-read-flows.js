
const helperExtensions = require('../../helper/test-helper-extensions')

module.exports = {

  "testReadMsgFlow": helperExtensions.cleanFlowPositionData([
    {
      "id": "a60ca8c447c6bf61",
      "type": "tab",
      "label": "Test Modbus Read Flow",
      "disabled": false,
      "info": "",
      "env": []
    },
    {
      "id": "445454e4.968564",
      "type": "modbus-server",
      "z": "a60ca8c447c6bf61",
      "name": "",
      "logEnabled": true,
      "hostname": "127.0.0.1",
      "serverPort": "7502",
      "responseDelay": 100,
      "delayUnit": "ms",
      "coilsBufferSize": 10000,
      "holdingBufferSize": 10000,
      "inputBufferSize": 10000,
      "discreteBufferSize": 10000,
      "showErrors": false,
      "x": 240,
      "y": 120,
      "wires": [
        [],
        [],
        [],
        [],
        []
      ]
    },
    {
      "id": "90922127.397cb8",
      "type": "modbus-read",
      "z": "a60ca8c447c6bf61",
      "name": "Modbus Read With IO",
      "topic": "",
      "showStatusActivities": false,
      "logIOActivities": false,
      "showErrors": false,
      "unitid": "",
      "dataType": "Coil",
      "adr": "0",
      "quantity": "10",
      "rate": "500",
      "rateUnit": "ms",
      "delayOnStart": false,
      "startDelayTime": "",
      "server": "92e7bf63.2efd7",
      "useIOFile": false,
      "ioFile": "",
      "useIOForPayload": false,
      "emptyMsgOnFail": false,
      "x": 260,
      "y": 220,
      "wires": [
        [
          "h1"
        ],
        []
      ]
    },
    {
      "id": "h1",
      "type": "helper",
      "z": "a60ca8c447c6bf61",
      "active": true,
      "x": 530,
      "y": 220,
      "wires": []
    },
    {
      "id": "92e7bf63.2efd7",
      "type": "modbus-client",
      "z": "a60ca8c447c6bf61",
      "name": "ModbusServer",
      "clienttype": "tcp",
      "bufferCommands": true,
      "stateLogEnabled": true,
      "queueLogEnabled": false,
      "failureLogEnabled": false,
      "tcpHost": "127.0.0.1",
      "tcpPort": "7502",
      "tcpType": "DEFAULT",
      "serialPort": "/dev/ttyUSB",
      "serialType": "RTU-BUFFERD",
      "serialBaudrate": "9600",
      "serialDatabits": "8",
      "serialStopbits": "1",
      "serialParity": "none",
      "serialConnectionDelay": "100",
      "serialAsciiResponseStartDelimiter": "",
      "unit_id": "1",
      "commandDelay": "1",
      "clientTimeout": "100",
      "reconnectOnTimeout": false,
      "reconnectTimeout": "200",
      "parallelUnitIdsAllowed": true
    }
  ]),

  "testReadWithoutClientFlow": helperExtensions.cleanFlowPositionData([
    {
      "id": "339c08c5301720ea",
      "type": "tab",
      "label": "Test Read without Client Flow",
      "disabled": false,
      "info": "",
      "env": []
    },
    {
      "id": "8ecaae3e.4b8928",
      "type": "modbus-read",
      "z": "339c08c5301720ea",
      "name": "modbusRead",
      "topic": "",
      "showStatusActivities": false,
      "logIOActivities": false,
      "showErrors": true,
      "unitid": "",
      "dataType": "Coil",
      "adr": "0",
      "quantity": "10",
      "rate": "2",
      "rateUnit": "s",
      "delayOnStart": false,
      "startDelayTime": "",
      "server": "",
      "useIOFile": false,
      "ioFile": "",
      "useIOForPayload": false,
      "emptyMsgOnFail": false,
      "x": 250,
      "y": 160,
      "wires": [
        [],
        []
      ]
    }
  ]),

  "testReadWithClientFlow": helperExtensions.cleanFlowPositionData([
    {
      "id": "718926afa3550cc9",
      "type": "tab",
      "label": "Test Read with Client Flow",
      "disabled": false,
      "info": "",
      "env": []
    },
    {
      "id": "b071294594e37a6c",
      "type": "modbus-server",
      "z": "718926afa3550cc9",
      "name": "modbusServer",
      "logEnabled": true,
      "hostname": "127.0.0.1",
      "serverPort": "9502",
      "responseDelay": 100,
      "delayUnit": "ms",
      "coilsBufferSize": 10000,
      "holdingBufferSize": 10000,
      "inputBufferSize": 10000,
      "discreteBufferSize": 10000,
      "showErrors": false,
      "x": 220,
      "y": 80,
      "wires": [
        [],
        [],
        [],
        [],
        []
      ]
    },
    {
      "id": "09846c74de630616",
      "type": "modbus-read",
      "z": "718926afa3550cc9",
      "name": "modbusRead",
      "topic": "",
      "showStatusActivities": false,
      "logIOActivities": false,
      "showErrors": true,
      "unitid": "",
      "dataType": "Coil",
      "adr": "0",
      "quantity": "10",
      "rate": "2",
      "rateUnit": "s",
      "delayOnStart": false,
      "startDelayTime": "",
      "server": "9018f377f076609d",
      "useIOFile": false,
      "ioFile": "",
      "useIOForPayload": false,
      "emptyMsgOnFail": false,
      "x": 230,
      "y": 180,
      "wires": [
        [
          "73fdd28c7140ed1d"
        ],
        [
          "5fd4e0210a5a9176"
        ]
      ]
    },
    {
      "id": "73fdd28c7140ed1d",
      "type": "helper",
      "z": "718926afa3550cc9",
      "name": "helper 1",
      "active": true,
      "tosidebar": true,
      "console": false,
      "tostatus": false,
      "complete": "false",
      "statusVal": "",
      "statusType": "auto",
      "x": 440,
      "y": 140,
      "wires": []
    },
    {
      "id": "5fd4e0210a5a9176",
      "type": "helper",
      "z": "718926afa3550cc9",
      "name": "helper 2",
      "active": true,
      "tosidebar": true,
      "console": false,
      "tostatus": false,
      "complete": "false",
      "statusVal": "",
      "statusType": "auto",
      "x": 440,
      "y": 220,
      "wires": []
    },
    {
      "id": "9018f377f076609d",
      "type": "modbus-client",
      "z": "718926afa3550cc9",
      "name": "modbusClient",
      "clienttype": "tcp",
      "bufferCommands": true,
      "stateLogEnabled": true,
      "queueLogEnabled": false,
      "failureLogEnabled": false,
      "tcpHost": "127.0.0.1",
      "tcpPort": "9502",
      "tcpType": "DEFAULT",
      "serialPort": "/dev/ttyUSB",
      "serialType": "RTU-BUFFERD",
      "serialBaudrate": "9600",
      "serialDatabits": "8",
      "serialStopbits": "1",
      "serialParity": "none",
      "serialConnectionDelay": "100",
      "serialAsciiResponseStartDelimiter": "",
      "unit_id": "1",
      "commandDelay": "1",
      "clientTimeout": "100",
      "reconnectOnTimeout": false,
      "reconnectTimeout": "200",
      "parallelUnitIdsAllowed": true
    }
  ]),

  "testReadWithClientIoFlow": helperExtensions.cleanFlowPositionData([
    {
      "id": "af1cc1dbe4c686ef",
      "type": "tab",
      "label": "Test Read with Client IO Flow",
      "disabled": false,
      "info": "",
      "env": []
    },
    {
      "id": "445454e4.968564",
      "type": "modbus-server",
      "z": "af1cc1dbe4c686ef",
      "name": "",
      "logEnabled": true,
      "hostname": "127.0.0.1",
      "serverPort": "8502",
      "responseDelay": 100,
      "delayUnit": "ms",
      "coilsBufferSize": 10000,
      "holdingBufferSize": 10000,
      "inputBufferSize": 10000,
      "discreteBufferSize": 10000,
      "showErrors": false,
      "x": 240,
      "y": 100,
      "wires": [
        [],
        [],
        [],
        [],
        []
      ]
    },
    {
      "id": "90922127.397cb8",
      "type": "modbus-read",
      "z": "af1cc1dbe4c686ef",
      "name": "Modbus Read With IO",
      "topic": "",
      "showStatusActivities": false,
      "logIOActivities": true,
      "showErrors": false,
      "unitid": "",
      "dataType": "InputRegister",
      "adr": "0",
      "quantity": "20",
      "rate": "200",
      "rateUnit": "ms",
      "delayOnStart": false,
      "startDelayTime": "",
      "server": "92e7bf63.2efd7",
      "useIOFile": true,
      "ioFile": "e0519b16.5fcdd",
      "useIOForPayload": false,
      "emptyMsgOnFail": false,
      "x": 220,
      "y": 180,
      "wires": [
        [
          "h1"
        ],
        []
      ]
    },
    {
      "id": "h1",
      "type": "helper",
      "z": "af1cc1dbe4c686ef",
      "active": true,
      "x": 470,
      "y": 160,
      "wires": []
    },
    {
      "id": "92e7bf63.2efd7",
      "type": "modbus-client",
      "z": "af1cc1dbe4c686ef",
      "name": "ModbusServer",
      "clienttype": "tcp",
      "bufferCommands": true,
      "stateLogEnabled": true,
      "queueLogEnabled": false,
      "failureLogEnabled": false,
      "tcpHost": "127.0.0.1",
      "tcpPort": "8502",
      "tcpType": "DEFAULT",
      "serialPort": "/dev/ttyUSB",
      "serialType": "RTU-BUFFERD",
      "serialBaudrate": "9600",
      "serialDatabits": "8",
      "serialStopbits": "1",
      "serialParity": "none",
      "serialConnectionDelay": "100",
      "serialAsciiResponseStartDelimiter": "",
      "unit_id": "1",
      "commandDelay": "1",
      "clientTimeout": "100",
      "reconnectOnTimeout": false,
      "reconnectTimeout": "200",
      "parallelUnitIdsAllowed": true
    },
    {
      "id": "e0519b16.5fcdd",
      "type": "modbus-io-config",
      "z": "af1cc1dbe4c686ef",
      "name": "TestIOFile",
      "path": "./test/resources/device.json",
      "format": "utf8",
      "addressOffset": ""
    }
  ]),

  "testReadWithClientIoPayloadFlow": helperExtensions.cleanFlowPositionData([
    {
      "id": "d43c4f439b227652",
      "type": "tab",
      "label": "Test Read with Client IO Payload Flow",
      "disabled": false,
      "info": "",
      "env": []
    },
    {
      "id": "445454e4.968564",
      "type": "modbus-server",
      "z": "d43c4f439b227652",
      "name": "",
      "logEnabled": true,
      "hostname": "127.0.0.1",
      "serverPort": "8502",
      "responseDelay": 100,
      "delayUnit": "ms",
      "coilsBufferSize": 10000,
      "holdingBufferSize": 10000,
      "inputBufferSize": 10000,
      "discreteBufferSize": 10000,
      "showErrors": false,
      "x": 280,
      "y": 100,
      "wires": [
        [],
        [],
        [],
        [],
        []
      ]
    },
    {
      "id": "90922127.397cb8",
      "type": "modbus-read",
      "z": "d43c4f439b227652",
      "name": "Modbus Read With IO",
      "topic": "",
      "showStatusActivities": true,
      "logIOActivities": true,
      "showErrors": false,
      "unitid": "",
      "dataType": "InputRegister",
      "adr": "0",
      "quantity": "20",
      "rate": "100",
      "rateUnit": "ms",
      "delayOnStart": true,
      "startDelayTime": "1",
      "server": "92e7bf63.2efd7",
      "useIOFile": true,
      "ioFile": "e0519b16.5fcdd",
      "useIOForPayload": true,
      "emptyMsgOnFail": false,
      "x": 300,
      "y": 200,
      "wires": [
        [
          "h1"
        ],
        []
      ]
    },
    {
      "id": "h1",
      "type": "helper",
      "z": "d43c4f439b227652",
      "x": 590,
      "y": 200,
      "wires": []
    },
    {
      "id": "92e7bf63.2efd7",
      "type": "modbus-client",
      "z": "d43c4f439b227652",
      "name": "ModbusServer",
      "clienttype": "tcp",
      "bufferCommands": true,
      "stateLogEnabled": true,
      "queueLogEnabled": false,
      "failureLogEnabled": false,
      "tcpHost": "127.0.0.1",
      "tcpPort": "8502",
      "tcpType": "DEFAULT",
      "serialPort": "/dev/ttyUSB",
      "serialType": "RTU-BUFFERD",
      "serialBaudrate": "9600",
      "serialDatabits": "8",
      "serialStopbits": "1",
      "serialParity": "none",
      "serialConnectionDelay": "100",
      "serialAsciiResponseStartDelimiter": "",
      "unit_id": "1",
      "commandDelay": "1",
      "clientTimeout": "100",
      "reconnectOnTimeout": false,
      "reconnectTimeout": "200",
      "parallelUnitIdsAllowed": true
    },
    {
      "id": "e0519b16.5fcdd",
      "type": "modbus-io-config",
      "z": "d43c4f439b227652",
      "name": "TestIOFile",
      "path": "./test/resources/device.json",
      "format": "utf8",
      "addressOffset": ""
    }
  ])

}
