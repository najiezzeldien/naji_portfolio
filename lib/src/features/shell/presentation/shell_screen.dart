import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/utils/glass_box.dart';
import '../../home/presentation/home_navigation.dart';

class ShellScreen extends StatelessWidget {
  final Widget child;
  const ShellScreen({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      resizeToAvoidBottomInset: false, // Prevent viewport resize
      drawerEnableOpenDragGesture: false, // Prevent swipe conflicts
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(80),
        child: const _AppNavBar(),
      ),
      endDrawer: const _MobileDrawer(),
      body: child,
    );
  }
}

class _AppNavBar extends ConsumerWidget {
  const _AppNavBar();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isDesktop = screenWidth > 768; // Standard tablet breakpoint
    final nav = ref.read(homeNavigationProvider);

    return Align(
      alignment: Alignment.topCenter,
      child: Container(
        margin: const EdgeInsets.only(top: 20),
        width: isDesktop ? 1000 : screenWidth * 0.92,
        height: 80, // Explicit height to prevent collapse
        child: GlassBox(
          opacity: 0.9, // High visibility
          blur: 25,
          color: AppColors.surface,
          borderRadius: BorderRadius.circular(100), // Pill shape
          border: Border.all(color: Colors.white.withValues(alpha: 0.2)),
          child: Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: 24,
            ), // Reduced padding
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                // LOGO ROW
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      width: 38,
                      height: 38,
                      decoration: BoxDecoration(
                        gradient: AppColors.primaryGradient,
                        borderRadius: BorderRadius.circular(10),
                        boxShadow: [
                          BoxShadow(
                            color: AppColors.primary.withValues(alpha: 0.3),
                            blurRadius: 8,
                            offset: const Offset(0, 4),
                          ),
                        ],
                      ),
                      child: const Center(
                        child: Text(
                          "N",
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                            fontSize: 20,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    const Text(
                      'Naji.',
                      style: TextStyle(
                        fontSize: 26,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                        letterSpacing: 0.5,
                      ),
                    ),
                  ],
                ),

                // DESKTOP MENU
                if (isDesktop)
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      _NavBarItem(
                        title: 'Home',
                        onTap: () => nav.scrollToSection(nav.heroKey),
                      ),
                      const SizedBox(width: 8),
                      _NavBarItem(
                        title: 'Experience',
                        onTap: () => nav.scrollToSection(nav.experienceKey),
                      ),
                      const SizedBox(width: 8),
                      _NavBarItem(
                        title: 'Education',
                        onTap: () => nav.scrollToSection(nav.educationKey),
                      ),
                      const SizedBox(width: 8),
                      _NavBarItem(
                        title: 'Projects',
                        onTap: () => nav.scrollToSection(nav.projectsKey),
                      ),
                      const SizedBox(width: 8),
                      _NavBarItem(
                        title: 'Skills',
                        onTap: () => nav.scrollToSection(nav.skillsKey),
                      ),
                      const SizedBox(width: 8),
                      _NavBarItem(
                        title: 'Contact',
                        onTap: () => nav.scrollToSection(nav.contactKey),
                      ),
                    ],
                  )
                // MOBILE DRAWER
                else
                  Builder(
                    builder: (context) => IconButton(
                      icon: const Icon(
                        Icons.menu,
                        color: Colors.white,
                        size: 28,
                      ),
                      onPressed: () {
                        Scaffold.of(context).openEndDrawer();
                      },
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _NavBarItem extends StatefulWidget {
  final String title;
  final VoidCallback onTap;

  const _NavBarItem({required this.title, required this.onTap});

  @override
  State<_NavBarItem> createState() => _NavBarItemState();
}

class _NavBarItemState extends State<_NavBarItem> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: InkWell(
        onTap: widget.onTap,
        borderRadius: BorderRadius.circular(30),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
          decoration: BoxDecoration(
            color: _isHovered
                ? Colors.white.withValues(alpha: 0.05)
                : Colors.transparent,
            borderRadius: BorderRadius.circular(30),
          ),
          child: Text(
            widget.title,
            style: TextStyle(
              color: _isHovered ? AppColors.primary : Colors.white,
              fontWeight: FontWeight.w600,
              fontSize: 15,
            ),
          ),
        ),
      ),
    );
  }
}

class _MobileDrawer extends ConsumerWidget {
  const _MobileDrawer();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final nav = ref.read(homeNavigationProvider);

    return Drawer(
      backgroundColor: AppColors.background,
      child: SingleChildScrollView(
        physics: const ClampingScrollPhysics(), // Prevent iOS bounce
        child: Column(
          children: [
            Container(
              height: 200,
              decoration: const BoxDecoration(
                gradient: AppColors.primaryGradient,
              ),
              child: const Center(
                child: Text(
                  'N.',
                  style: TextStyle(
                    fontSize: 60,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 32),
            _DrawerItem(
              title: 'Home',
              onTap: () {
                context.pop(); // Close drawer
                nav.scrollToSection(nav.heroKey);
              },
            ),
            _DrawerItem(
              title: 'Experience',
              onTap: () {
                context.pop();
                nav.scrollToSection(nav.experienceKey);
              },
            ),
            _DrawerItem(
              title: 'Education',
              onTap: () {
                context.pop();
                nav.scrollToSection(nav.educationKey);
              },
            ),
            _DrawerItem(
              title: 'Projects',
              onTap: () {
                context.pop();
                nav.scrollToSection(nav.projectsKey);
              },
            ),
            _DrawerItem(
              title: 'Skills',
              onTap: () {
                context.pop();
                nav.scrollToSection(nav.skillsKey);
              },
            ),
            _DrawerItem(
              title: 'Contact',
              onTap: () {
                context.pop();
                nav.scrollToSection(nav.contactKey);
              },
            ),
          ],
        ),
      ),
    );
  }
}

class _DrawerItem extends StatelessWidget {
  final String title;
  final VoidCallback onTap;

  const _DrawerItem({required this.title, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: const Icon(Icons.arrow_right, color: AppColors.primary),
      title: Text(
        title,
        style: const TextStyle(fontSize: 16, color: AppColors.textPrimary),
      ),
      onTap: onTap,
    );
  }
}
