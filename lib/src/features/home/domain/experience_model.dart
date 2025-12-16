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
    company: 'Becom',
    role: 'Flutter Developer',
    duration: '2023 - Present',
    location: 'Remote',
    description: 'Developing mobile applications using Flutter.',
    projects: ['Sanad Customer', 'Gecol'],
  ),
  Experience(
    company: 'Ebtekar Information Systems',
    role: 'Mobile Developer',
    duration: '2022 - 2023',
    location: 'Tripoli',
    description: 'Built various enterprise solutions.',
    projects: ['Office Anywhere'],
  ),
];

