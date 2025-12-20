import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../features/shell/presentation/shell_screen.dart';
import '../../features/home/presentation/home_screen.dart';

final GlobalKey<NavigatorState> _rootNavigatorKey = GlobalKey<NavigatorState>();

final GoRouter appRouter = GoRouter(
  navigatorKey: _rootNavigatorKey,
  initialLocation: '/',
  routes: [
    ShellRoute(
      builder: (context, state, child) {
        return ShellScreen(child: child);
      },
      routes: [
        GoRoute(
          path: '/',
          builder: (context, state) => const HomeScreen(),
        ),
      ],
    ),
  ],
);
