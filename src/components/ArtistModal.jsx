import { motion, AnimatePresence } from 'framer-motion';

export default function ArtistModal({ open, onClose, artist }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-2xl bg-neutral-950 border border-white/10 shadow-2xl overflow-hidden"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/10">
              <h3 className="text-white text-2xl sm:text-3xl font-bold">{artist?.name}</h3>
              <button
                aria-label="Close"
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors text-xl"
              >
                ×
              </button>
            </div>
            <div className="p-6 sm:p-8 text-white/90 space-y-4">
              {artist?.modal?.realName && (
                <p><span className="font-semibold text-white">Real name:</span> {artist.modal.realName}</p>
              )}
              {artist?.modal?.birth && (
                <p><span className="font-semibold text-white">Born:</span> {artist.modal.birth}</p>
              )}
              {artist?.modal?.genre && (
                <p><span className="font-semibold text-white">Genre:</span> {artist.modal.genre}</p>
              )}
              {artist?.modal?.description && (
                <p className="leading-relaxed text-white/80">{artist.modal.description}</p>
              )}
              {artist?.modal?.latestAlbum && (
                <p className="italic text-white/80">Latest album: {artist.modal.latestAlbum}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
