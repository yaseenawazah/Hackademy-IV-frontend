/*
 * Use this object when testing components that depend on data from injected services.
 *
 * Available properties
 *   orgList: the organizations list
 *   projectList: the project list
 *   activitiesList: the activities list
 *   donorList: the list of donors.
 *
 * Example usage:
 *
 * In the following code, in the beforeEach() function of the unit test file, we are getting
 * the service from the injector, and spying on the appropriate property, then returning the
 * value from the test data instead of getting the data from the server.
 *

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationPageComponent);
    component = fixture.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let orgSpy = spyOn(dataService,'getOrganizations').and.returnValue(Observable.of(testData.orgList));
  });

 * As we know the test data, we now know how the component should behave, and we can test that.
 *
 */

export const testData = {
    orgList: [
      {
        'organizationId':  1,
        'organizationNumber':  'ABCD01-BC01',
        'name':  'Jaway',
        'address':  'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName':  'Osker',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 2,
        'organizationNumber': 'ABCD01-BC02',
        'name': 'H&M',
        'address': 'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName': 'Marcus',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 3,
        'organizationNumber': 'ABCD01-BC03',
        'name': 'Nokia',
        'address': 'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName':  'Jabbar',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  4,
        'organizationNumber':  'ABCD01-BC04',
        'name':  'Com Hem',
        'address':  'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName':  'Amir',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  5,
        'organizationNumber':  'ABCD01-BC05',
        'name':  'Oracle',
        'address':  'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName':  'Najla',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  6,
        'organizationNumber':  'ABCD01-BC06',
        'name':  'Siemens',
        'address':  'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName':  'Yahya',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  7,
        'organizationNumber':  'ABCD01-BC07',
        'name':  'Sybercom',
        'address':  'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName':  'Lillia',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  8,
        'organizationNumber':  'ABCD01-BC08',
        'name':  'Swedbank',
        'address':  'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName':  'Yunas',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  9,
        'organizationNumber':  'ABCD01-BC09',
        'name':  'Telia Company',
        'address':  'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName':  'Jabbar',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  10,
        'organizationNumber':  'ABCD01-BC10',
        'name':  'King',
        'address':  'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName':  'Thomas',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  11,
        'organizationNumber':  'ABCD01-BC11',
        'name':  'Handelsbanken',
        'address':  'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName':  'Lin',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  12,
        'organizationNumber':  'ABCD01-BC12',
        'name':  'Nordea',
        'address':  'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName':  'Carolin',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  13,
        'organizationNumber':  '123546-3412',
        'name':  'Robert Project',
        'address':  'Malmövägen',
        'contactPersonName':  'Mr.RScania',
        'contactPersonEmail':  'sscaniaf@scania',
        'accountNumber':  '123452346',
        'billingInformation':  'Malmö',
        'description':  'Truck Company'
      },
      {
        'organizationId':  21,
        'organizationNumber':  '123546-3423',
        'name':  'Robert Project',
        'address':  'Malmövägen',
        'contactPersonName':  'Mr.RScania',
        'contactPersonEmail':  'sscaniaf@scania',
        'accountNumber':  '123452346',
        'billingInformation':  'Malmö',
        'description':  'Truck Company'
      },
      {
        'organizationId':  22,
        'organizationNumber':  'ABXC01-BC01',
        'name':  'Jaway 2',
        'address':  'Hans Michelsensgatan 10 SE-211 20 Malmö',
        'contactPersonName':  'Osker',
        'contactPersonEmail':  'stockholm@jayway.com',
        'accountNumber':  'XYZ123',
        'billingInformation':  'SjÃ¦leboderne',
        'description':  'Charity'
      },
      {
        'organizationId':  23,
        'organizationNumber':  '123456-7896',
        'name':  'Samatar\'s Charity',
        'address':  'kdsjhfkdsahfk',
        'contactPersonName':  'Samatar',
        'contactPersonEmail':  'samatar@charity.co',
        'accountNumber':  '1111-1111-1111-1111',
        'billingInformation':  '',
        'description':  'fldshfkdshfkjds'
      },
      {
        'organizationId':  24,
        'organizationNumber':  '123t56-7896',
        'name':  'Samatars Charity',
        'address':  'kdsjhfkdsahfk',
        'contactPersonName':  'Samatar',
        'contactPersonEmail':  'samatar@charity.co',
        'accountNumber':  '1111-1111-1111-1111',
        'billingInformation':  '',
        'description':  'fldshfkdshfkjds'
      },
      {
        'organizationId':  25,
        'organizationNumber':  '895672-4425',
        'name':  'Samatar\'s Charity fdsfds',
        'address':  'fdlkjfdskjfdskjf',
        'contactPersonName':  'fdsfds',
        'contactPersonEmail':  'vf@fd.vo',
        'accountNumber':  '1111-2569-5874-6985',
        'billingInformation':  '',
        'description':  'fdkjhfdskf'
      },
      {
        'organizationId':  26,
        'organizationNumber':  '123456-1265',
        'name':  'Doctor Without Border',
        'address':  'Lund',
        'contactPersonName':  'Doctor',
        'contactPersonEmail':  'doctor@org.com',
        'accountNumber':  '3212-4332-4555-8888',
        'billingInformation':  'Malmö',
        'description':  'Tryout to save'
      }
    ],
    projectList: [
      {
        'projectNumber':  'ACVDFR-1234',
        'projectName':  'Swedish Stuttering Association',
        'address':  'Slottsgatan 33, 211 33 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  12.9925,
        'latitude':  55.6027,
        'amountToBeRaised':  900.0,
        'raisedFunding':  900.0,
        'description':  'Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Jabbar',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  1,
        'id':  1
      },
      {
        'projectNumber':  'CFDRAX-1234',
        'projectName':  'Solidarity, Human Rights, Inclusion, Accessibility-shia',
        'address':  'Regementsgatan 52, 21745 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  12.9847,
        'latitude':  55.5977,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'Shia – the Swedish Organisations\' of Disabled Persons International Aid Association – is a non-profit organisation that was formed in 1981.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Amir',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  2,
        'id':  2
      },
      {
        'projectNumber':  'XXLMKI-1234',
        'projectName':  'Independent Living Institute - Ili.',
        'address':  'Per Weijersgatan 6, 211 34 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  12.9998,
        'latitude':  55.6036,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'The Independent Living Institute (ILI) is a policy development center specializing in consumer-driven policies for disabled peoples.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Amir',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  3,
        'id':  3
      },
      {
        'projectNumber':  'LXLMKI-1234',
        'projectName':  'Caja For Sustainable Economies',
        'address':  'Spångatan 7, 21144 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  13.0044,
        'latitude':  55.5961,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'The Independent Living Institute (ILI) is a policy development center specializing in consumer-driven policies for disabled peoples.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Yahya',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  4,
        'id':  4
      },
      {
        'projectNumber':  'NJDUWE-1234',
        'projectName':  'Caritas Sweden',
        'address':  'Triangeln 2, 211 43 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  13.0015,
        'latitude':  55.5965,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Jabbar',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  5,
        'id':  5
      },
      {
        'projectNumber':  'NJDUWB-1234',
        'projectName':  'Cisv Swedenn',
        'address':  'Baltzarsgatan 20, 21136 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  13.0043,
        'latitude':  55.6045,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Jabbar',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  6,
        'id':  6
      },
      {
        'projectNumber':  'LXLPKI-1234',
        'projectName':  'Eden Foundation',
        'address':  'Möllevångsgatan 51, 21420 Malmö ',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  13.0111,
        'latitude':  55.5927,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'The Independent Living Institute (ILI) is a policy development center specializing in consumer-driven policies for disabled peoples.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Yahya',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  7,
        'id':  7
      },
      {
        'projectNumber':  'PODGWD-1234',
        'projectName':  'Hunger Project In Sweden',
        'address':  'Tessins väg 12, 21758 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  12.9758,
        'latitude':  55.6005,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Jabbar',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  8,
        'id':  8
      },
      {
        'projectNumber':  'LNBCHS-1234',
        'projectName':  'Iogt-nto Movement',
        'address':  'ALMTORGET 1, 21457 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  13.0231,
        'latitude':  55.577,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'IOGT-NTO Movements mission and commitment is to encourage and support relevant agents in their strive for a decreasing use of alcohol.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Carolin',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  9,
        'id':  9
      },
      {
        'projectNumber':  'LMUYHS-1234',
        'projectName':  'Operation Mercy',
        'address':  'Berguvsgatan 10, 21559 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  13.011,
        'latitude':  55.5695,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'Operation Mercy workers immerse themselves in the local culture, learning the local language before tackling anything else.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Carolin',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  10,
        'id':  10
      },
      {
        'projectNumber':  'LMLOIU-1234',
        'projectName':  'Pan Asia Co-operation Society Pacs',
        'address':  'Berguvsgatan 10, 21559 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  13.011,
        'latitude':  55.5695,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'PACS -Pan Asia Co-operation Society is a Swedish NGO founded in 1971 and involved in developmental programs in Asia.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Carolin',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  11,
        'id':  11
      },
      {
        'projectNumber':  'OCPSHY-1234',
        'projectName':  'Eu Art Museum',
        'address':  'Dirigentgatan 4, 21585 Malmö',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  12.9912,
        'latitude':  55.5628,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'The EU Arts Museum is an EU Arts Museum based somewhere inside an EU member country and providing its services to All EU nationals and visitors.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Carolin',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  4,
        'id':  12
      },
      {
        'projectNumber':  'KJFHUE-1234',
        'projectName':  'International Pen',
        'address':  'Erlandsrovägen 7, 21845 Vintrie',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  12.9766,
        'latitude':  55.549,
        'amountToBeRaised':  900.0,
        'raisedFunding':  0.0,
        'description':  'International PEN, the worldwide association of writers, exists to promote friendship and intellectual co-operation among writers everywhere, regardless of their political or other views.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Carolin',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  3,
        'id':  13
      },
      {
        'projectNumber':  'ABCDEF-1234',
        'projectName':  'Swedish Maximization Association',
        'address':  'Hamngatan 10, Malmö, Sweden',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  13.0001,
        'latitude':  55.607,
        'amountToBeRaised':  800.0,
        'raisedFunding':  0.0,
        'description':  'Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Jabbar',
        'nationalProject':  false,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  2,
        'id':  14
      },
      {
        'projectNumber':  'ABCDEF-1244',
        'projectName':  'Swedish Minimization Association',
        'address':  'Hamngatan 10, Malmö, Sweden',
        'fromDate':  1507993184000,
        'toDate':  1539529184000,
        'longitude':  13.0001,
        'latitude':  55.607,
        'amountToBeRaised':  800.0,
        'raisedFunding':  0.0,
        'description':  'Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments.',
        'mainImage':  './assets/photos/project004/main/001.jpg',
        'images':  null,
        'projectManager':  'Jabbar',
        'nationalProject':  true,
        'recurringProject':  false,
        'recurringProjectPublishingDate':  null,
        'organizationId':  1,
        'id':  15
      }
    ],
    activitiesList: [
      {
        'eventId':  1,
        'projectId':  2,
        'eventTitle':  'Test1',
        'eventDescription':  'XYA',
        'eventDate':  1508630400000,
        'eventImage':  'XYA'
      },
      {
        'eventId':  2,
        'projectId':  1,
        'eventTitle':  'Test2',
        'eventDescription':  'XYB',
        'eventDate':  1508630400000,
        'eventImage':  'XYB'
      },
      {
        'eventId':  3,
        'projectId':  3,
        'eventTitle':  'Test3',
        'eventDescription':  'XYC',
        'eventDate':  1508630400000,
        'eventImage':  'XYC'
      },
      {
        'eventId':  5,
        'projectId':  4,
        'eventTitle':  'Test2',
        'eventDescription':  'XYB',
        'eventDate':  1508637600000,
        'eventImage':  'XYB'
      },
      {
        'eventId':  6,
        'projectId':  13,
        'eventTitle':  'Test3',
        'eventDescription':  'ABC',
        'eventDate':  1508637600000,
        'eventImage':  'XYB'
      },
      {
        'eventId':  9,
        'projectId':  1,
        'eventTitle':  'Test4',
        'eventDescription':  'XYB',
        'eventDate':  1484182800000,
        'eventImage':  'XYB'
      },
      {
        'eventId':  10,
        'projectId':  1,
        'eventTitle':  'Test4',
        'eventDescription':  'XYB',
        'eventDate':  1484182800000,
        'eventImage':  'XYB'
      },
      {
        'eventId':  12,
        'projectId':  2,
        'eventTitle':  'Test1',
        'eventDescription':  'XYA',
        'eventDate':  1508630400000,
        'eventImage':  'XYA'
      }
    ],
    donorList: [
      {
        'id':  1,
        'userName':  'Natasa',
        'userSlogan':  'Do your home work in time',
        'userImage':  './assets/photos/userImage1.jpeg',
        'wallet':  {
          'total':  0,
          'donated':  125
        },
        'savedProject':  [
          1,
          2,
          3,
          4
        ]
      }
    ]
  };
