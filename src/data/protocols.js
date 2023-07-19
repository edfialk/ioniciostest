const protocols = [
  {
    category: "Trauma",
    protocols: [
      {
        url: "/abdominalTrauma",
        title: "Abdominal Imaging in Blunt Trauma"
      },
      {
        url: "/solidOrganInjuryTrauma",
        title: "Solid Organ Injury Trauma Management"
      },
    ]
  },
  {
    category: "Central Lines",
    protocols: [
      {
        url: "/apheresisCatheterRecommendations",
        title: "Apheresis Catheter Recommendations"
      },      
      {
        url: "/centralLinePlacementinOncologyPatients",
        title: "Central Line Placement in Oncology Patients"
      },
      {
        url: "/centralLineRemovalinOncologyPatients",
        title: "Central Line Removal in Oncology Patients"
      },
      {
        url: "/centralLineReplacementAfterCLABSI",
        title: "Central Line Replacement after CLABSI"
      },     
      {
        url: "/centralLineTroubleshooting",
        title: "Central Line Troubleshooting Algorithm"
      },
    ]
  },
  {
    category: "Oncology",
    protocols: [
      {
        url: "/anesthesiaGuidelinesAMM",
        title: "Anesthesia Guidelines for AMM"
      },
      {
        url: "/ammManagement",
        title: "Anterior Mediastinal Mass (AMM) Management"
      },
      {
        url: "/neuroblastomadiagnosis",
        title: "Neuroblastoma diagnosis algorithm"
      }
    ]
  },
  {
    category: "Critical Care",
    protocols: [
      {
        url: "/adolescentECMOCannulation",
        title: "Adolescent ECMO Cannulation at DCH"
      },
      {
        url: "/buttonbattery",
        title: "OHSU Button Battery Protocol"
      },
    ]
  },
  {
    category: "Neonates",
    protocols: [
      {
        url: "/gastroschisisManagement",
        title: "Gastroschisis Management Protocol"
      },
      {
        url: "/necrotizingEnterocolitis",
        title: "Necrotizing Enterocolitis Protocol"
      },      
    ]
  },
  {
    category: "Abdomen",
    protocols: [
      {
        url: "/colonBundle",
        title: "Colon Bundle"
      },
      {
        url: "/gastrografinAdhesiveSBO",
        title: "Gastrografin SBFT for Adhesive SBO"
      },
      {
        url: "/managementOfIleocolicIntussusception",
        title: "Management of Ileocolic Intussusception"
      },
      {
        url: "/perioperativeAppendicitisManagement",
        title: "Perioperative Appendicitis Management Protocol"
      },
      {
        url: "/peritonealDialysis",
        title: "Peritoneal Dialysis Catheter Placement"
      },
      {
        url: "/postGastrostomyPlacementFeeding",
        title: "Post-Gastrostomy Placement Feeding Protocol"
      },
      {
        url: "/pyloricStenosisPerioperative",
        title: "Pyloric Stenosis Perioperative Protocol"
      },
    ]
  },
  {
    category: "Perianal",
    protocols: [
      {
        url: "/infantPerianalAbscess",
        title: "Infant Perianal Abscess Protocol"
      },
      {
        url: "/postoperativePSARP",
        title: "Postoperative PSARP Protocol"
      },
    ]
  },
  {
    category: "Thoracic",
    protocols: [
      {
        url: "/spontaneousPneumothorax",
        title: "Spontaneous Pneumothorax Protocol"
      },
    ]
  }
];

export const getProtocols = () => protocols.sort((a, b) => a.category.localeCompare(b.category));

// export const getProtocol = (id: number) => protocols.find(m => m.id === id);