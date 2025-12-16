import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../../../core/theme/app_colors.dart';

class ContactSection extends StatelessWidget {
  const ContactSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 24),
      color: Colors.black.withValues(alpha: 0.3),
      child: Column(
        children: [
          const Text(
            'Get in Touch',
            style: TextStyle(
              fontSize: 32,
              fontWeight: FontWeight.bold,
              color: AppColors.textPrimary,
            ),
          ),
          const SizedBox(height: 16),
          const Text(
            'Have a project in mind? Let\'s work together.',
            style: TextStyle(fontSize: 18, color: AppColors.textSecondary),
          ),
          const SizedBox(height: 48),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _SocialButton(
                icon: Icons.email_outlined,
                onTap: () => launchUrl(Uri.parse('mailto:naji@example.com')),
              ),
              const SizedBox(width: 24),
              _SocialButton(
                icon: FontAwesomeIcons.linkedinIn,
                onTap: () => launchUrl(Uri.parse('https://linkedin.com')),
              ),
              const SizedBox(width: 24),
              _SocialButton(
                icon: FontAwesomeIcons.github,
                onTap: () => launchUrl(Uri.parse('https://github.com')),
              ),
            ],
          ),
          const SizedBox(height: 80),
          const Text(
            '© 2025 Naji Ezzeldien. All rights reserved.',
            style: TextStyle(fontSize: 14, color: AppColors.textSecondary),
          ),
        ],
      ),
    );
  }
}

class _SocialButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback onTap;

  const _SocialButton({required this.icon, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(50),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(color: AppColors.primary),
        ),
        child: Icon(icon, color: AppColors.primary, size: 24),
      ),
    );
  }
}
