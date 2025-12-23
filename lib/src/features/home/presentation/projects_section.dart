import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:naji_portfolio/l10n/app_localizations.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/utils/glass_box.dart';
import '../domain/project_model.dart';

class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    final isDesktop = ResponsiveBreakpoints.of(context).largerThan(TABLET);
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);
    final projects = Project.getProjects(context);

    // Dynamic grid count
    int crossAxisCount = 3;
    if (ResponsiveBreakpoints.of(context).smallerThan(DESKTOP))
      crossAxisCount = 2;
    if (ResponsiveBreakpoints.of(context).smallerThan(TABLET))
      crossAxisCount = 1;

    return Container(
      width: double.infinity,
      padding: EdgeInsets.symmetric(
        vertical: isMobile ? 48 : 80,
        horizontal: isMobile ? 16 : 24,
      ),
      color: Colors.black.withValues(alpha: 0.2),
      child: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                AppLocalizations.of(context)!.featuredProjects,
                style: TextStyle(
                  fontSize: isDesktop ? 48 : (isMobile ? 32 : 36),
                  fontWeight: FontWeight.bold,
                  color: AppColors.textPrimary,
                ),
              ),
              const SizedBox(height: 16),
              Text(
                AppLocalizations.of(context)!.projectsSubtitle,
                style: const TextStyle(
                  fontSize: 18,
                  color: AppColors.textSecondary,
                ),
              ),
              const SizedBox(height: 60),
              GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: crossAxisCount,
                  // Tweak aspect ratio for different screen sizes to prevent overflow
                  childAspectRatio: isMobile ? 0.8 : 0.85,
                  crossAxisSpacing: 24,
                  mainAxisSpacing: 24,
                ),
                itemCount: projects.length,
                itemBuilder: (context, index) =>
                    _ProjectCard(project: projects[index]),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _ProjectCard extends StatefulWidget {
  final Project project;

  const _ProjectCard({required this.project});

  @override
  State<_ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<_ProjectCard> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        transform: Matrix4.translationValues(
          0.0,
          _isHovered ? -10.0 : 0.0,
          0.0,
        ),
        child: GlassBox(
          color: AppColors.surface,
          opacity: 0.5,
          border: Border.all(
            color: _isHovered
                ? AppColors.primary.withValues(alpha: 0.5)
                : Colors.white.withValues(alpha: 0.05),
            width: 1.5,
          ),
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Icon / Placeholder
                Container(
                  width: 50,
                  height: 50,
                  decoration: BoxDecoration(
                    color: AppColors.background,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Center(
                    child: Icon(
                      Icons.smartphone_rounded,
                      color: AppColors.primary,
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                // Title
                Text(
                  widget.project.title,
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: AppColors.textPrimary,
                  ),
                ),
                const SizedBox(height: 12),
                // Description
                Expanded(
                  child: Text(
                    widget.project.description,
                    style: const TextStyle(
                      fontSize: 14,
                      color: AppColors.textSecondary,
                      height: 1.5,
                    ),
                    maxLines: 4,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
                const SizedBox(height: 24),
                // Buttons
                Row(
                  children: [
                    if (widget.project.appStoreUrl != null)
                      Padding(
                        padding: const EdgeInsetsDirectional.only(end: 12),
                        child: _StoreButton(
                          icon: FontAwesomeIcons.appStore,
                          url: widget.project.appStoreUrl!,
                        ),
                      ),
                    if (widget.project.playStoreUrl != null)
                      _StoreButton(
                        icon: FontAwesomeIcons.googlePlay,
                        url: widget.project.playStoreUrl!,
                      ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _StoreButton extends StatelessWidget {
  final IconData icon;
  final String url;

  const _StoreButton({required this.icon, required this.url});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => launchUrl(Uri.parse(url)),
      child: Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Icon(icon, color: Colors.black, size: 20),
      ),
    );
  }
}
