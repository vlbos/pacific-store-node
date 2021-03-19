export default {
  Address: "AccountId",
  LookupSource: "AccountId",
  Signature: "Vec<u8>",
  Attribute: {
    name: "Vec<u8>",
    value: "Vec<u8>",
    validity: "BlockNumber",
    creation: "Moment",
    nonce: "u64",
  },
  AttributeTransaction: {
    signature: "Signature",
    name: "Vec<u8>",
    value: "Vec<u8>",
    validity: "u32",
    signer: "AccountId",
    identity: "AccountId",
  },
  PropName: "Vec<u8>",
  PropValue: "Vec<u8>",
  ProductProperty: {
    name: "PropName",
    value: "PropValue",
  },
  ProductId: "Vec<u8>",
  Product: {
    id: "ProductId",
    owner: "AccountId",
    props: "Option<Vec<ProductProperty>>",
    created_date: "Moment",
  },
    OrderId: "Vec<u8>",
    FieldName: "Vec<u8>",
    FieldValue: "Vec<u8>",
    OrderField: {
      name: "FieldName",
      value: "FieldValue"
    },
    OrderJSONType: {
      index: "u64",
      id: "OrderId",
      owner: "AccountId",
      fields: "Option<Vec<OrderField>>",
      created_date: "Moment"
    },
    Side: {
      _enum: ["Buy", "Sell"]
    },
    SaleKind: {
      _enum: ["FixedPrice", "DutchAuction"]
    },
    FeeMethod: {
      _enum: ["ProtocolFee", "SplitFee"]
    },
    HowToCall: {
      _enum: ["Call", "DelegateCall"]
    },
  Identifier: "Vec<u8>",
  Decimal: "i32",
  ShipmentId: "Identifier",
  ShippingEventIndex: "u128",
  DeviceId: "Identifier",
  ShipmentStatus: {
    _enum: ["Pending", "InTransit", "Delivered"],
  },
  Shipment: {
    id: "ShipmentId",
    owner: "AccountId",
    status: "ShipmentStatus",
    products: "Vec<ProductId>",
    created_date: "Moment",
    delivered: "Option<Moment>",
  },
  ShippingOperation: {
    _enum: ["Pickup", "Scan", "Deliver"],
  },
  ShippingEventType: {
    _enum: [
      "ShipmentRegistration",
      "ShipmentPickup",
      "ShipmentScan",
      "ShipmentDeliver",
    ],
  },
  ShippingEvent: {
    event_type: "ShippingEventType",
    shipment_id: "ShipmentId",
    location: "Option<ReadPoint>",
    readings: "Vec<Reading<Moment>>",
    timestamp: "Moment",
  },
  ReadPoint: {
    latitude: "Decimal",
    longitude: "Decimal",
  },
  ReadingType: {
    _enum: [
      "Humidity",
      "Pressure",
      "Shock",
      "Tilt",
      "Temperature",
      "Vibration",
    ],
  },
  Reading: {
    device_id: "DeviceId",
    reading_type: "ReadingType",
    timestamp: "Moment",
    value: "Decimal",
  },
  Permission: {
    _enum: ["Execute", "Manage"],
  },
  Role: {
    pallet: "Vec<u8>",
    permission: "Permission",
  },
  Keys: "SessionKeys2",
};
