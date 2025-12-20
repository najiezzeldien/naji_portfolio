class Experience {
  final String company;
  final String role;
  final String duration;
  final String location;
  final String description;
  final List<String> projects;

  const Experience({
    required this.company,
    required this.role,
    required this.duration,
    required this.location,
    required this.description,
    required this.projects,
  });
}

const List<Experience> experiences = [
  Experience(
    company: 'Becom بِكُمْ Company',
    role: 'Flutter Engineer',
    duration: 'March 2025 - Present',
    location: 'Tripoli - Libya',
    description: 'Becom is a Fin-Tech firm delivering integrated software solutions for payment and e-commerce. Full lifecycle development of mobile applications for Android and iOS, encompassing new application creation, feature implementation, and bug resolution in existing solutions.',
    projects: ['Sanad Customer', 'Sanad Merchant (New)', 'Sanad Merchant (Legacy)'],
  ),
  Experience(
    company: 'Ebtekar Information Systems Company',
    role: 'Flutter Engineer',
    duration: 'August 2023 - December 2024',
    location: 'Tripoli - Libya',
    description: 'Ebtekar Information Systems Company (EISC) is a full-service agency specializing in planning and delivering effective, innovative media and technology solutions for domestic and international clients. Full lifecycle development of mobile applications for Android and iOS.',
    projects: ['Shin Aljaw', 'Lingo'],
  ),
  Experience(
    company: 'Management Intelligence Company',
    role: 'Flutter Engineer',
    duration: 'November 2019 - March 2022',
    location: 'Riyadh - Saudi Arabia',
    description: 'Management Intelligence Company (MIC) is a startup software firm specializing in building web systems and mobile applications tailored for the Saudi market. Full lifecycle development of mobile applications and backend development contributions using ASP.NET Core Web API.',
    projects: ['D-Maintenance', 'Office Anywhere'],
  ),
];

