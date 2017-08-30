import parser from 'xml2json';
import js2xmlparser from 'js2xmlparser';

export const convertXmlToJson = (xmlString) => {
  return parser.toJson(xmlString, { object: true });
};

export const convertJsonToXml = (root, data) => {
  js2xmlparser.parse(root, data);
};
