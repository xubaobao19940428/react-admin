

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('../../assets/svgs/', false, /\.svg$/);
requireAll(req)