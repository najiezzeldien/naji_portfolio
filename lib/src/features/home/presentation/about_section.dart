import 'package:flutter/material.dart';
import '../../../core/theme/app_colors.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 24),
      child: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 800),
          child: const Column(
            children: [
              Text(
                'About Me',
                style: TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textPrimary,
                ),
              ),
              SizedBox(height: 24),
              Text(
                'Highly driven Mobile Applications Engineer with over 4 years of expertise in crafting user-focused applications for both Android and iOS platforms utilizing the Flutter framework. I have successfully deployed 6 applications to Google Play, the Apple App Store, and the Sunmi store, accumulating over 27,000 downloads.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 18,
                  color: AppColors.textSecondary,
                  height: 1.6,
                ),
              ),
              SizedBox(height: 32),
              Text(
                'Core Strengths',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textPrimary,
                ),
              ),
              SizedBox(height: 16),
              Text(
                '• Developing scalable, secure, and maintainable mobile applications\n'
                '• Architecting solutions using Clean Architecture and Clean Code principles\n'
                '• Advanced state management (Riverpod, Bloc) and dependency injection patterns\n'
                '• Integrating complex features: payment gateways, Firebase services, real-time communication, hardware integration\n'
                '• Building responsive, localized applications with exceptional user experiences',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 16,
                  color: AppColors.textSecondary,
                  height: 1.8,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
