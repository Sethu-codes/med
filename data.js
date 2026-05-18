const surgeries = [
  {
    id: 'sleeve',
    title: 'Laparoscopic Sleeve Gastrectomy',
    themeColor: '#ff7f50', // coral/orange
    duration: '60–90 min',
    anesthesia: 'General',
    recovery: '2–4 weeks',
    approach: 'Laparoscopic',
    tags: ['Bariatric', 'Weight loss', 'Minimally invasive'],
    description: 'A surgical weight-loss procedure where the stomach is reduced to about 15% of its original size, by surgical removal of a large portion of the stomach along the greater curvature.',
    steps: [
      { title: 'Laparoscopic access', description: 'Small incisions are made in the abdomen to insert trocars.', x: 20, y: 60, imageUrl: 'assets/images/consistent_sleeve_base_ext_1779119967951.png' },
      { title: 'Dissection of stomach attachments', description: 'The greater curvature of the stomach is freed from its attachments.', x: 30, y: 30, imageUrl: 'assets/images/consistent_sleeve_base_int_1779119981108.png' },
      { title: 'Calibration tube insertion', description: 'A sizing tube (bougie) is inserted to guide the staple line.', x: 45, y: 20, imageUrl: 'assets/images/consistent_sleeve_step_3_1779120052058.png' },
      { title: 'Stapling the stomach', description: 'A surgical stapler is used to divide the stomach vertically.', x: 60, y: 40, imageUrl: 'assets/images/consistent_sleeve_step_4_1779120074204.png' },
      { title: 'Division completed', description: 'The stomach is completely divided into a narrow tube and a larger excised portion.', x: 75, y: 50, imageUrl: 'assets/images/consistent_sleeve_step_5_1779120091707.png' },
      { title: 'Removal of excised stomach', description: 'The larger, separated part of the stomach is removed from the abdomen.', x: 80, y: 70, imageUrl: 'assets/images/consistent_sleeve_step_6_1779120132666.png' },
      { title: 'Checking for leaks', description: 'The new stomach tube is checked for any leaks using dye or air.', x: 50, y: 60, imageUrl: 'assets/images/consistent_sleeve_step_7_1779120150687.png' },
      { title: 'Closure of incisions', description: 'The laparoscopic instruments are removed and incisions are closed.', x: 20, y: 60, imageUrl: 'assets/images/consistent_sleeve_step_8_1779120165792.png' }
    ]
  },
  {
    id: 'bypass',
    title: 'Roux-en-Y Gastric Bypass',
    themeColor: '#4169e1', // blue
    duration: '2–4 hours',
    anesthesia: 'General',
    recovery: '3–5 weeks',
    approach: 'Laparoscopic',
    tags: ['Bariatric', 'Malabsorptive', 'Weight loss'],
    description: 'A procedure that creates a small pouch from the stomach and connects the newly created pouch directly to the small intestine, bypassing the rest of the stomach and the first portion of the small intestine.',
    steps: [
      { title: 'Laparoscopic access', description: 'Ports are placed in the abdomen for surgical instruments.', x: 20, y: 60, imageUrl: 'assets/images/consistent_bypass_base_ext_1779119998065.png' },
      { title: 'Creation of small gastric pouch', description: 'The top of the stomach is divided to create a small pouch, restricting food intake.', x: 45, y: 25, imageUrl: 'assets/images/consistent_bypass_base_int_1779120011007.png' },
      { title: 'Division of the small intestine', description: 'The small intestine is divided further down.', x: 50, y: 55, imageUrl: 'assets/images/consistent_bypass_step_3_1779120202038.png' },
      { title: 'Roux limb brought up', description: 'The lower part of the divided intestine (Roux limb) is brought up to the new pouch.', x: 55, y: 40, imageUrl: 'assets/images/consistent_bypass_step_4_1779120217586.png' },
      { title: 'Gastrojejunostomy', description: 'The Roux limb is connected to the small gastric pouch.', x: 50, y: 30, imageUrl: 'assets/images/consistent_bypass_step_5_1779120235487.png' },
      { title: 'Jejunojejunostomy', description: 'The bypassed stomach and upper intestine are reconnected to the Roux limb lower down.', x: 40, y: 70, imageUrl: 'assets/images/consistent_bypass_step_6_1779120281043.png' },
      { title: 'Closure of incisions', description: 'Instruments are removed and incisions are carefully closed.', x: 20, y: 60, imageUrl: 'assets/images/consistent_bypass_step_7_1779120297102.png' }
    ]
  },
  {
    id: 'banding',
    title: 'Laparoscopic Gastric Banding',
    themeColor: '#008080', // teal/green
    duration: '30–60 min',
    anesthesia: 'General',
    recovery: '1–2 weeks',
    approach: 'Laparoscopic',
    tags: ['Bariatric', 'Restrictive', 'Reversible'],
    description: 'A procedure involving the placement of an adjustable silicone band around the upper part of the stomach to restrict food intake.',
    steps: [
      { title: 'Laparoscopic access', description: 'Instruments are inserted through small incisions after inflating the abdomen with gas.', x: 20, y: 60, imageUrl: 'assets/images/consistent_banding_step_1_v3_1779100228253.png' },
      { title: 'Tunnel created behind stomach', description: 'A small tunnel is carefully dissected behind the upper part of the stomach.', x: 48, y: 28, imageUrl: 'assets/images/consistent_banding_step_2_v2_1779100133308.png' },
      { title: 'Adjustable band positioned', description: 'The gastric band is passed through the tunnel and positioned around the upper stomach.', x: 48, y: 28, imageUrl: 'assets/images/consistent_banding_step_3_v2_1779100151535.png' },
      { title: 'Band locked around upper stomach', description: 'The ends of the band are locked together to form a ring around the stomach.', x: 48, y: 28, imageUrl: 'assets/images/consistent_banding_step_4_v2_1779100247282.png' },
      { title: 'Gastrogastric fixation sutures placed', description: 'Stitches are placed on the stomach to fold it over the band, preventing the band from slipping.', x: 48, y: 32, imageUrl: 'assets/images/consistent_banding_step_5_v2_1779100266956.png' },
      { title: 'Access port secured under skin', description: 'A small port is connected to the band via tubing and secured under the skin of the abdomen for future adjustments.', x: 20, y: 80, imageUrl: 'assets/images/consistent_banding_step_6_v2_1779101089497.png' },
      { title: 'Closure of incisions', description: 'The laparoscopic incisions are sutured closed.', x: 20, y: 60, imageUrl: 'assets/images/consistent_banding_step_7_v2_1779101107252.png' }
    ]
  }
];
