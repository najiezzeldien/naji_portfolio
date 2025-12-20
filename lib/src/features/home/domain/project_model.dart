class Project {
  final String title;
  final String description;
  final String? appStoreUrl;
  final String? playStoreUrl;

  const Project({
    required this.title,
    required this.description,
    this.appStoreUrl,
    this.playStoreUrl,
  });
}

const List<Project> projects = [
  Project(
    title: 'Sanad Customer',
    description: 'Comprehensive E-Commerce platform for digital recharge vouchers and card products for telecommunication services in Libya. Features payment gateway integration, wallet management, QR code generation, and real-time notifications.',
    appStoreUrl: 'https://apps.apple.com/us/app/سنـد/id6749844909',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ly.becom.sanadcustomers&hl=en',
  ),
  Project(
    title: 'Sanad Merchant',
    description: 'Merchant application empowering vendors to sell and print recharge vouchers for local and international telecommunication providers. Integrated with Sunmi POS devices for native printing.',
    // Available on Sunmi Store only
  ),
  Project(
    title: 'Shin Aljaw',
    description: 'Full-featured weather application offering real-time conditions, natural events, and latest weather updates. Supports trip planning, seasonal activity tracking (planting, harvesting), and detailed marine conditions.',
    appStoreUrl: 'https://apps.apple.com/us/app/%D8%B4%D9%86-%D8%A7%D9%84%D8%AC%D9%88/id6503896230?platform=iphone',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ebtekar.shin_aljaw',
  ),
  Project(
    title: 'Lingo',
    description: 'Educational platform with live lesson broadcasting (audio & video) using Agora Interactive Live Streaming. Features real-time communication, multimedia playback, and personalized learning paths.',
    appStoreUrl: 'https://apps.apple.com/us/app/lingo-%D9%84%D9%8A%D9%86%D9%82%D9%88/id1559887910',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ebtekar.lingo',
  ),
  Project(
    title: 'Office Anywhere (O-Anywhere)',
    description: 'Internal utility application designed to streamline task management and communication across all company departments. Serving real estate companies in Saudi Arabia.',
    appStoreUrl: 'https://apps.apple.com/sa/app/o-anywhere/id1599979909?l=ar',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.delmon.anyware',
  ),
  Project(
    title: 'D-Maintenance',
    description: 'Customer-focused mobile application enabling efficient submission of maintenance requests, feedback, suggestions, and service evaluations for real estate management.',
    // Internal app - no public store links
  ),
];


       