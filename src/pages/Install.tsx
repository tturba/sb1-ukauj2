import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import { motion } from 'framer-motion';

function Install() {
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios');
    } else if (/android/.test(userAgent)) {
      setPlatform('android');
    }

    // Handle PWA install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h1 className="mb-6 text-4xl font-bold">Install PawFume App</h1>
        <p className="mb-12 text-lg text-gray-600">
          Get the best experience with our mobile app. Easy access to your favorite dog perfumes
          anytime, anywhere.
        </p>
      </motion.div>

      <div className="mx-auto max-w-3xl">
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {platforms.map((p, index) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`cursor-pointer rounded-lg border p-6 text-center transition-colors hover:border-primary-gold ${
                platform === p.id ? 'border-primary-gold bg-primary/5' : ''
              }`}
              onClick={() => setPlatform(p.id as typeof platform)}
            >
              <p.icon className="mx-auto mb-4 h-8 w-8 text-primary-gold" />
              <h3 className="text-lg font-semibold">{p.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-lg border bg-white p-8"
        >
          {platform === 'ios' && <IOSInstructions />}
          {platform === 'android' && <AndroidInstructions />}
          {platform === 'desktop' && (
            <DesktopInstructions onInstall={handleInstall} hasInstallPrompt={!!deferredPrompt} />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="mb-4 text-lg font-semibold">Scan to Open on Mobile</h3>
          <div className="mx-auto h-48 w-48 rounded-lg bg-white p-4 shadow-md">
            {/* Replace with actual QR code implementation */}
            <div className="h-full w-full rounded bg-gray-200" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const platforms = [
  { id: 'desktop', name: 'Desktop', icon: Monitor },
  { id: 'ios', name: 'iOS', icon: Smartphone },
  { id: 'android', name: 'Android', icon: Tablet },
];

function IOSInstructions() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Install on iOS</h3>
      <ol className="list-decimal space-y-4 pl-6">
        <li>Open Safari on your iOS device</li>
        <li>
          Tap the Share button <span className="rounded-md bg-gray-100 px-2 py-1">􀈂</span> at the
          bottom of the screen
        </li>
        <li>
          Scroll down and tap <span className="font-medium">Add to Home Screen</span>
        </li>
        <li>
          Tap <span className="font-medium">Add</span> in the top right corner
        </li>
      </ol>
      <div className="rounded-lg bg-primary/10 p-4 text-sm">
        <p>
          <strong>Note:</strong> PawFume must be opened in Safari for the installation to work.
        </p>
      </div>
    </div>
  );
}

function AndroidInstructions() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Install on Android</h3>
      <ol className="list-decimal space-y-4 pl-6">
        <li>Open Chrome on your Android device</li>
        <li>
          Tap the menu icon <span className="rounded-md bg-gray-100 px-2 py-1">⋮</span> in the top
          right
        </li>
        <li>
          Tap <span className="font-medium">Install app</span> or{' '}
          <span className="font-medium">Add to Home screen</span>
        </li>
        <li>Follow the on-screen instructions to install</li>
      </ol>
      <div className="rounded-lg bg-primary/10 p-4 text-sm">
        <p>
          <strong>Note:</strong> If you don't see the install option, the site may need to be opened in
          Chrome.
        </p>
      </div>
    </div>
  );
}

function DesktopInstructions({ onInstall, hasInstallPrompt }: { onInstall: () => void; hasInstallPrompt: boolean }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Install on Desktop</h3>
      {hasInstallPrompt ? (
        <>
          <p>Click the button below to install PawFume as a desktop application:</p>
          <Button onClick={onInstall} size="lg">
            Install PawFume
          </Button>
        </>
      ) : (
        <div className="rounded-lg bg-primary/10 p-4">
          <p>
            To install PawFume on your desktop, open this site in a supported browser like Chrome,
            Edge, or Firefox.
          </p>
        </div>
      )}
    </div>
  );
}

export default Install;