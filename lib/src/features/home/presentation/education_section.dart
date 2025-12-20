import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/utils/glass_box.dart';

class EducationSection extends StatelessWidget {
  const EducationSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 24),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1000),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // HEADER
              const Text(
                'Education',
                style: TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              const SizedBox(height: 16),
              Container(
                width: 60,
                height: 4,
                decoration: BoxDecoration(
                  gradient: AppColors.primaryGradient,
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
              const SizedBox(height: 48),

              // EDUCATION LIST
              _EducationCard(
                degree: 'Master in Information Technology',
                school: 'University of Sciences and Technology, Omdurman, Sudan',
                date: 'October 2018',
                description:
                    'Thesis focused on data mining in economics, involving collection and analysis of public opinions on the Sudanese economy from Twitter. Utilized RapidMiner Studio for data classification.',
              ),
              const SizedBox(height: 24),
              _EducationCard(
                degree: 'Bachelor of Computer Sciences',
                school: 'University of Sciences and Technology, Omdurman, Sudan',
                date: 'October 2015',
                description:
                    'Final project: Developed an Android mobile application using Java for voice calls over Wi-Fi Direct between two Android devices.',
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _EducationCard extends StatefulWidget {
  final String degree;
  final String school;
  final String date;
  final String description;

  const _EducationCard({
    required this.degree,
    required this.school,
    required this.date,
    required this.description,
  });

  @override
  State<_EducationCard> createState() => _EducationCardState();
}

class _EducationCardState extends State<_EducationCard> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).isMobile;

    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: GlassBox(
        opacity: 0.05,
        color: _isHovered
            ? AppColors.primary.withValues(alpha: 0.1)
            : Colors.white.withValues(alpha: 0.05),
        border: Border.all(
          color: _isHovered
              ? AppColors.primary.withValues(alpha: 0.5)
              : Colors.white.withValues(alpha: 0.1),
        ),
        borderRadius: BorderRadius.circular(20),
        child: Padding(
          padding: const EdgeInsets.all(32),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // HEADER ROW (Degree + Date)
              if (!isMobile)
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Text(
                        widget.degree,
                        style: const TextStyle(
                          fontSize: 22,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                    ),
                    const SizedBox(width: 16),
                    Text(
                      widget.date,
                      style: const TextStyle(
                        fontSize: 16,
                        color: AppColors.primary,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                )
              else ...[
                Text(
                  widget.date,
                  style: const TextStyle(
                    fontSize: 14,
                    color: AppColors.primary,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  widget.degree,
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
              ],

              const SizedBox(height: 8),

              // School Name
              Text(
                widget.school,
                style: const TextStyle(
                  fontSize: 16,
                  color: AppColors.textSecondary,
                  fontStyle: FontStyle.italic,
                ),
              ),

              const SizedBox(height: 16),

              // Description
              Text(
                widget.description,
                style: const TextStyle(
                  fontSize: 16,
                  color: AppColors.textPrimary,
                  height: 1.6,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
