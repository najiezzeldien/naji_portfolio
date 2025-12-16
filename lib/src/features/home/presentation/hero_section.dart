import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../../../core/theme/app_colors.dart';

class HeroSection extends StatelessWidget {
  const HeroSection({super.key});

  @override
  Widget build(BuildContext context) {
    final isDesktop = ResponsiveBreakpoints.of(context).largerThan(TABLET);

    return Container(
      height: MediaQuery.of(context).size.height * 0.9,
      width: double.infinity,
      alignment: Alignment.center,
      padding: const EdgeInsets.symmetric(horizontal: 24),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            'Hello, I am',
            style: TextStyle(
              fontSize: isDesktop ? 24 : 18,
              color: AppColors.primary,
              fontWeight: FontWeight.w600,
              letterSpacing: 2,
            ),
          ),
          const SizedBox(height: 16),
          ShaderMask(
            shaderCallback: (bounds) => AppColors.primaryGradient.createShader(bounds),
            child: Text(
              'Naji Ezzeldien',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: isDesktop ? 80 : 48,
                fontWeight: FontWeight.bold,
                color: Colors.white,
                height: 1.1,
              ),
            ),
          ),
          const SizedBox(height: 16),
          Text(
            'Flutter & Mobile App Developer',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: isDesktop ? 32 : 24,
              color: AppColors.textPrimary,
              fontWeight: FontWeight.w500,
            ),
          ),
          const SizedBox(height: 24),
          const Text(
            'Building high-performance, beautiful mobile applications.',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 18,
              color: AppColors.textSecondary,
            ),
          ),
        ],
      ),
    );
  }
}
