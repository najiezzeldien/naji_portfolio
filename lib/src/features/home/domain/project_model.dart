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
    description: 'A customer application for service requests.',
    playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.sanad.customer',
  ),
  Project(title: 'Gecol', description: 'Utility billing and management app.'),
];


       