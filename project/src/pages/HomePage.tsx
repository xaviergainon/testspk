import React from 'react';
import { Gift, Users, Trophy, ArrowRight, Shield, Sparkles } from 'lucide-react';
import { Button } from '../components/forms/Button';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gift className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ReferralPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">Comment ça marche</a>
              <a href="#rewards" className="text-gray-600 hover:text-gray-900">Récompenses</a>
              <Button variant="secondary" onClick={() => window.location.href = '/login'}>
                Se connecter
              </Button>
              <Button onClick={() => window.location.href = '/signup'}>
                S'inscrire
              </Button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-20 pb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
            Parrainez vos amis,<br />
            <span className="text-blue-600">Gagnez des récompenses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Rejoignez notre programme de parrainage et transformez vos recommandations en récompenses exceptionnelles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="px-8 py-3 text-lg" onClick={() => window.location.href = '/signup'}>
              Commencer maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" className="px-8 py-3 text-lg" onClick={() => window.location.href = '#how-it-works'}>
              En savoir plus
            </Button>
          </div>
        </div>
      </header>

      {/* How it works section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Comment ça fonctionne
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Invitez vos amis</h3>
              <p className="text-gray-600">Partagez votre code de parrainage unique avec vos amis et votre réseau.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Ils s'inscrivent</h3>
              <p className="text-gray-600">Vos amis créent leur compte en utilisant votre code de parrainage.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Gagnez des points</h3>
              <p className="text-gray-600">Recevez des points pour chaque ami parrainé qui rejoint la plateforme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards section */}
      <section id="rewards" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Des récompenses exceptionnelles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Niveau Bronze</h3>
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-6">500 points</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Carte cadeau de 50€
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  1 mois d'abonnement premium
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-2 border-blue-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Niveau Argent</h3>
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-6">1000 points</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Carte cadeau de 100€
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  3 mois d'abonnement premium
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Support prioritaire
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Niveau Or</h3>
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-6">2000 points</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Carte cadeau de 250€
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  6 mois d'abonnement premium
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Accès VIP aux événements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prêt à commencer votre aventure ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui gagnent déjà des récompenses en partageant avec leurs amis.
          </p>
          <Button 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            onClick={() => window.location.href = '/signup'}
          >
            S'inscrire gratuitement
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Gift className="w-6 h-6 text-white" />
                <span className="text-lg font-bold text-white">ReferralPro</span>
              </div>
              <p className="text-sm">
                La meilleure plateforme de parrainage pour récompenser vos recommandations.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="hover:text-white">Comment ça marche</a></li>
                <li><a href="#rewards" className="hover:text-white">Récompenses</a></li>
                <li><a href="/signup" className="hover:text-white">S'inscrire</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Légal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Conditions d'utilisation</a></li>
                <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white">Mentions légales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>support@referralpro.com</li>
                <li>01 23 45 67 89</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-sm">© 2024 ReferralPro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};