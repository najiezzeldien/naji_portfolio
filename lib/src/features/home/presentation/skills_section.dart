import 'package:flutter/material.dart';
import 'package:naji_portfolio/l10n/app_localizations.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/utils/glass_box.dart';

class SkillsSection extends StatelessWidget {
  const SkillsSection({super.key});

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final skills = [
      // Languages
      'Dart', 'Java', 'C#', 'C++',
      // Core Concepts
      'OOP', 'OOD', l10n.skillSolid, l10n.skillDesignPatterns, l10n.skillDataStructures, l10n.skillAlgorithms,
      // Frameworks & Libraries
      'Flutter', 'ASP.NET Web API',
      // State Management
      'Riverpod', 'Bloc', 'Provider', 'GetX',
      // Architecture & Practices
      l10n.skillCleanArch, l10n.skillCleanCode, 'MVVM', 'TDD', 'Agile/Scrum',
      // Tools & Platforms
      'Git', 'GitHub', 'CI/CD', 'Firebase', 'Dio', 'GoRouter',
      // Advanced Features
      l10n.skillPaymentGateway, l10n.skillHardware, 
      l10n.skillRealTime, l10n.skillPushNotifications,
      l10n.skillResponsiveUI, l10n.skillLocalization, l10n.skillQRCode,
    ];

    return Container(
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 24),
      child: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 1000),
          child: Column(
            children: [
              Text(
                l10n.skills,
                style: const TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textPrimary,
                ),
              ),
              const SizedBox(height: 48),
              Wrap(
                spacing: 16,
                runSpacing: 16,
                alignment: WrapAlignment.center,
                children: skills.map((skill) => _SkillChip(label: skill)).toList(),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _SkillChip extends StatelessWidget {
  final String label;
  const _SkillChip({required this.label});

  @override
  Widget build(BuildContext context) {
    return GlassBox(
      color: AppColors.surface,
      opacity: 0.8,
      borderRadius: BorderRadius.circular(20),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        child: Text(
          label,
          style: const TextStyle(
            fontSize: 16,
            color: AppColors.textPrimary,
            fontWeight: FontWeight.w500,
          ),
        ),
      ),
    );
  }
}
