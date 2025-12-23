import 'package:flutter/material.dart';
import 'package:naji_portfolio/l10n/app_localizations.dart';

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

  static List<Experience> getExperiences(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    return [
      Experience(
        company: l10n.expCompanyBecom,
        role: l10n.expRoleBecom,
        duration: l10n.expDateBecom,
        location: l10n.expLocBecom,
        description: l10n.expDescBecom,
        projects: ['Sanad Customer', 'Sanad Merchant (New)', 'Sanad Merchant (Legacy)'],
      ),
      Experience(
        company: l10n.expCompanyEbtekar,
        role: l10n.expRoleEbtekar,
        duration: l10n.expDateEbtekar,
        location: l10n.expLocEbtekar,
        description: l10n.expDescEbtekar,
        projects: ['Shin Aljaw', 'Lingo'],
      ),
      Experience(
        company: l10n.expCompanyMIC,
        role: l10n.expRoleMIC,
        duration: l10n.expDateMIC,
        location: l10n.expLocMIC,
        description: l10n.expDescMIC,
        projects: ['D-Maintenance', 'Office Anywhere'],
      ),
    ];
  }
}
