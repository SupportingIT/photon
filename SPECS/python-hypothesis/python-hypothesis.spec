%{!?python_sitelib: %define python_sitelib %(python -c "from distutils.sysconfig import get_python_lib;print(get_python_lib())")}
%{!?python3_sitelib: %define python3_sitelib %(python3 -c "from distutils.sysconfig import get_python_lib;print(get_python_lib())")}

Name:           python-hypothesis
Version:        3.8.2
Release:        1%{?dist}
Summary:        Python library for creating unit tests which are simpler to write and more powerful
License:        MPLv2.0
Group:          Development/Languages/Python
Url:            https://github.com/HypothesisWorks/hypothesis-python
Vendor:		VMware, Inc.
Distribution:   Photon
Source0:        https://pypi.python.org/packages/cf/d5/b3d491e4b5094be0ef69b910d637096c8e23f84a9bdc4eba0b869220d1f0/hypothesis-%{version}.tar.gz
%define sha1    hypothesis=7416346ebd8ae6f78f482980f80a57764913e27f

BuildRequires:  python2
BuildRequires:  python2-devel
BuildRequires:  python2-libs
BuildRequires:  python-setuptools
BuildRequires:  python-enum34

Requires:       python2
Requires:       python2-libs
Requires:       python-enum34

BuildArch:      noarch

%description
Hypothesis is an advanced testing library for Python. It lets you write tests which are parametrized by a source of examples,
and then generates simple and comprehensible examples that make your tests fail. This lets you find more bugs in your code with less work

%package -n     python3-hypothesis
Summary:        Python library for creating unit tests which are simpler to write and more powerful
BuildRequires:  python3
BuildRequires:  python3-devel

Requires:       python3
Requires:       python3-libs

%description -n python3-hypothesis

Python 3 version.

%prep
%setup -n hypothesis-%{version}
rm -rf ../p3dir
cp -a . ../p3dir

%build
python2 setup.py build
pushd ../p3dir
python3 setup.py build
popd

%install
python2 setup.py install --prefix=%{_prefix} --root=%{buildroot}
pushd ../p3dir
python3 setup.py install --prefix=%{_prefix} --root=%{buildroot}
popd

%check
make -k check |& tee %{_specdir}/%{name}-check-log || %{nocheck}

%files
%defattr(-,root,root,-)
%{python_sitelib}/*

%files -n python3-hypothesis
%defattr(-,root,root,-)
%{python3_sitelib}/*

%changelog
*   Tue Apr 25 2017 Dheeraj Shetty <dheerajs@vmware.com> 3.8.2-1
-   Initial
