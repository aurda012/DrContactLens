export default ({
  firstName,
  lastName,
  streetAddress,
  cityAddress,
  stateAddress,
  zipAddress,
  quantityLeft,
  seriesLeft,
  baseCurveLeft,
  diameterLeft,
  powerLeft,
  cylinderLeft,
  axisLeft,
  quantityRight,
  seriesRight,
  baseCurveRight,
  diameterRight,
  powerRight,
  cylinderRight,
  axisRight,
}) => (`<?xml version="1.0" encoding="UTF-8"?>
<ns0:IOrderService_PlaceOrder_InputMessage xmlns:ns0="http://www.absolution.com/schemas/ODG/Services">
  <parameters>
    <PlaceOrder xmlns="http://www.absolution.com/schemas/ODG/Services" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.absolution.com/schemas/ODG/Services" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:msc="http://schemas.microsoft.com/ws/2005/12/wsdl/contract">
      <Request type="Purchase">
        <Source type="NXTLVL">
          <Order id="V0170712003172">
            <ClientID>1049362</ClientID>
            <Office>
              <Name>DR CONTACT LENS</Name>
              <Telephone>5209403081</Telephone>
              <OfficeID></OfficeID>
              <OfficeAddress>
                <Name>DR CONTACT LENS</Name>
                <Telephone xsi:nil="true"/>
                <AddressLine1>2815 OAK GROVE RD</AddressLine1>
                <City>DAVIE</City>
                <State>FL</State>
                <Zip>33328</Zip>
              </OfficeAddress>
            </Office>
            <PoNumber>V0170712003172</PoNumber>
            <Shipping>
              <Method>GROUND</Method>
              <ShipToPatient>Y</ShipToPatient>
              <Name>DR CONTACT LENS</Name>
              <Telephone>5209403081</Telephone>
              <Address>
                <Name>${firstName} ${lastName}</Name>
                <Telephone xsi:nil="true"/>
                <AddressLine1>${streetAddress}</AddressLine1>
                <City>${cityAddress}</City>
                <State>${stateAddress}</State>
                <Zip>${zipAddress}</Zip>
              </Address>
            </Shipping>
            <PatientOrderAmount>0</PatientOrderAmount>
            <Items>
              <Item id="BK0007144">
                <Patient>${firstName} ${lastName}</Patient>
                <Eye>OS</Eye>
                <Quantity>${quantityLeft}</Quantity>
                <PatientPrice>0</PatientPrice>
                <Product>
                  <ProductRx>
                    <SER_ID>${seriesLeft}</SER_ID>
                    <PRF_BASECURVE>${baseCurveLeft}</PRF_BASECURVE>
                    <PRF_DIAMETER>${diameterLeft}</PRF_DIAMETER>
                    <PRD_POWER>${powerLeft}</PRD_POWER>
                    <PRD_CYLINDER>${cylinderLeft}</PRD_CYLINDER>
                    <PRD_AXIS>${axisLeft}</PRD_AXIS>
                  </ProductRx>
                </Product>
              </Item>
              <Item id="BK0007145">
                <Patient>${firstName} ${lastName}</Patient>
                <Eye>OD</Eye>
                <Quantity>${quantityRight}</Quantity>
                <PatientPrice>0</PatientPrice>
                <Product>
                  <ProductRx>
                    <SER_ID>${seriesRight}</SER_ID>
                    <PRF_BASECURVE>${baseCurveRight}</PRF_BASECURVE>
                    <PRF_DIAMETER>${diameterRight}</PRF_DIAMETER>
                    <PRD_POWER>${powerRight}</PRD_POWER>
                    <PRD_CYLINDER>${cylinderRight}</PRD_CYLINDER>
                    <PRD_AXIS>${axisRight}</PRD_AXIS>
                  </ProductRx>
                </Product>
              </Item>
            </Items>
          </Order>
        </Source>
      </Request>
      <passPhrase>XXXX</passPhrase>
    </PlaceOrder>
  </parameters>
</ns0:IOrderService_PlaceOrder_InputMessage>`);
